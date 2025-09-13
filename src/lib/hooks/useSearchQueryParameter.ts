"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UseSearchQueryParameter = {
  searchQuery: string;
  updateSearchQuery: (newSearch: string) => void;
}

export function useSearchQueryParameter(): UseSearchQueryParameter {
  const searchParameters = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const searchQuery = searchParameters.get("search") || "";

  const updateSearchQuery = (newSearchQuery: string): void => {
    if (newSearchQuery === searchQuery) return;

    const parameters = new URLSearchParams(searchParameters);

    parameters.set("search", newSearchQuery.toString());

    replace((pathname + "?" + parameters.toString()));
  };

  return {
    searchQuery,
    updateSearchQuery
  };
}
