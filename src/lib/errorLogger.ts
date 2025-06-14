interface ErrorLog {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
}

class ErrorLogger {
  private static instance: ErrorLogger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  private formatError(error: Error, errorInfo?: React.ErrorInfo): ErrorLog {
    return {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
  }

  logError(error: Error, errorInfo?: React.ErrorInfo): void {
    const errorLog = this.formatError(error, errorInfo);

    // Always log to console in development
    if (this.isDevelopment) {
      console.group('🚨 Error Details');
      console.error('Message:', errorLog.message);
      console.error('Stack:', errorLog.stack);
      if (errorLog.componentStack) {
        console.error('Component Stack:', errorLog.componentStack);
      }
      console.groupEnd();
    }

    // In production, we would send to a service like Sentry
    if (!this.isDevelopment) {
      // TODO: Implement Sentry or other error tracking service
      // Example: Sentry.captureException(error, { extra: errorLog });
      console.error('Production Error:', errorLog.message);
    }
  }

  // Utility to copy error info to clipboard
  async copyErrorToClipboard(error: Error, errorInfo?: React.ErrorInfo): Promise<void> {
    const errorLog = this.formatError(error, errorInfo);
    const errorText = JSON.stringify(errorLog, null, 2);
    
    try {
      await navigator.clipboard.writeText(errorText);
      console.log('Error info copied to clipboard');
    } catch (err) {
      console.error('Failed to copy error info:', err);
    }
  }
}

export const errorLogger = ErrorLogger.getInstance(); 