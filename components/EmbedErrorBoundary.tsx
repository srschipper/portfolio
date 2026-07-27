"use client";

import { Component, type ReactNode } from "react";

interface EmbedErrorBoundaryProps {
  children: ReactNode;
}

interface EmbedErrorBoundaryState {
  hasError: boolean;
}

export default class EmbedErrorBoundary extends Component<
  EmbedErrorBoundaryProps,
  EmbedErrorBoundaryState
> {
  constructor(props: EmbedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="text-sm text-muted">
          This content couldn&apos;t load. Try refreshing the page.
        </p>
      );
    }

    return this.props.children;
  }
}
