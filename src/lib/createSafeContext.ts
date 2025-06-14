import React from 'react';

export function createSafeContext<T>(displayName: string) {
  const Context = React.createContext<T | undefined>(undefined);
  Context.displayName = displayName;

  function useContext() {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error(`use${displayName} must be used within a ${displayName}Provider`);
    }
    return context;
  }

  return [Context.Provider, useContext] as const;
} 