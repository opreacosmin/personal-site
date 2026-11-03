import React, { ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error?.message || 'Unexpected error',
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Unhandled render error:', error, errorInfo);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    const { hasError, message } = this.state;

    if (!hasError) {
      return this.props.children;
    }

    return (
      <div className="error-boundary" role="alert">
        <h2 className="error-boundary__title">Ceva nu a funcționat</h2>
        <p className="error-boundary__text">
          A apărut o eroare neașteptată la afișarea acestei pagini. Încearcă să reîncarci pagina sau
          întoarce-te la pagina principală.
        </p>
        <p className="error-boundary__details">{message}</p>
        <div className="error-boundary__actions">
          <button type="button" className="error-boundary__btn" onClick={this.handleReload}>
            Reîncarcă pagina
          </button>
          <a className="error-boundary__link" href="/">
            Înapoi acasă
          </a>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
