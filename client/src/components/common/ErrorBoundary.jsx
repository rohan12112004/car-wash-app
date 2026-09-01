/**
 * @file ErrorBoundary.jsx
 * @description Catches runtime React errors in child components and prevents full white screen crashes.
 */
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught Error in Component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 my-6 bg-red-50 border border-red-200 rounded-3xl text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-heading font-bold text-red-800 mb-2">Something went wrong in this section</h3>
          <p className="text-sm text-red-600 mb-4">{this.state.error?.toString()}</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="px-6 py-2 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
