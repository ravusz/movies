"use client";
import type { ReactNode } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { TbodyErrorFallback } from "./TbodyErrorFallback";

type TbodyErrorBoundaryProps = {
  children: ReactNode;
}

export function TbodyErrorBoundary({ children }: TbodyErrorBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={TbodyErrorFallback} >
      {children}
    </ErrorBoundary>
  );
}
