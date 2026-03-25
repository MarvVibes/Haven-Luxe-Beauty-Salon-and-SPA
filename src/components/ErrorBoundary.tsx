import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      let message = "Something went wrong. Please try again later.";
      
      try {
        // Check if it's our JSON error from handleFirestoreError
        const parsed = JSON.parse(this.state.error?.message || "");
        if (parsed.error && parsed.operationType) {
          message = `There was a problem with the ${parsed.operationType} operation. Please check your connection or contact support.`;
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-beige p-6 text-center">
          <div className="max-w-md bg-white p-10 rounded-[2rem] luxury-shadow">
            <h2 className="text-3xl font-serif text-brand-dark mb-4">Unexpected Error</h2>
            <p className="text-brand-brown mb-8">{message}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-brand-dark text-white px-8 py-3 rounded-full font-medium uppercase tracking-widest hover:bg-brand-brown transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
