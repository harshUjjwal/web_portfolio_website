import React from 'react';
import { errorLogger } from '@/lib/errorLogger';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ errorInfo });
    errorLogger.logError(error, errorInfo);
  }

  private handleCopyError = async () => {
    if (this.state.error) {
      await errorLogger.copyErrorToClipboard(this.state.error, this.state.errorInfo || undefined);
    }
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 mb-6">
                We're sorry, but there was an error loading this part of the application.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Refresh Page
                </button>
                {process.env.NODE_ENV === 'development' && (
                  <>
                    <button
                      onClick={this.handleCopyError}
                      className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                    >
                      Copy Error Details
                    </button>
                    <div className="mt-4 p-4 bg-gray-100 rounded-md text-left">
                      <p className="text-sm font-mono text-red-600 mb-2">
                        {this.state.error?.message}
                      </p>
                      {this.state.errorInfo?.componentStack && (
                        <pre className="text-xs font-mono text-gray-600 whitespace-pre-wrap">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 