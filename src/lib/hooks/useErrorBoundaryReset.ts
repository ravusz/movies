"use client";
import { startTransition } from "react";

import { useRouter } from "next/navigation";
import type { FallbackProps } from "react-error-boundary";

export function useErrorBoundaryReset(
  resetErrorBoundary: FallbackProps["resetErrorBoundary"],
): () => void {
  const router = useRouter();

  function reset() {
    startTransition(() => {
      router.refresh();
      resetErrorBoundary();
    });
  }

  return reset;
}
