import { Component } from 'react';

import ErrorMessage from '../error-message';
import { WithChildrenProps, ErrorState } from '../types';

export default class ErrorBoundary extends Component<
  WithChildrenProps,
  ErrorState
> {
  public state: ErrorState = {
    hasError: false,
    messageError: '',
  };

  public componentDidCatch(err: Error): void {
    this.setState({
      hasError: true,
      messageError: err.message,
    });
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorMessage message={this.state.messageError} />;
    }

    return this.props.children;
  }
}
