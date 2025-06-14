import React from 'react';
import { Button } from '@/components/ui/button';

interface TestWrapperProps {
  children: React.ReactNode;
}

export function TestWrapper({ children }: TestWrapperProps) {
  return (
    <div className="container mx-auto p-4">
      {children}
    </div>
  );
}

export function ErrorThrower() {
  const [shouldThrow, setShouldThrow] = React.useState(false);

  if (shouldThrow) {
    throw new Error('Test error thrown from ErrorThrower component');
  }

  return (
    <div className="space-y-4">
      <p>Click the button below to trigger an error:</p>
      <Button
        onClick={() => setShouldThrow(true)}
        variant="destructive"
      >
        Throw Error
      </Button>
    </div>
  );
}

export function ContextTester() {
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      // Try to use a context without its provider
      const { useChart } = require('@/components/ui/chart');
      useChart();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    }
  }, []);

  return (
    <div className="space-y-4">
      <p>Testing context usage without provider:</p>
      {error ? (
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-600">{error}</p>
        </div>
      ) : (
        <p>No error occurred</p>
      )}
    </div>
  );
} 