"use client";

import { Input } from "@/components/Input";
import { useSearchQueryParameter } from "@/lib/hooks/useSearchQueryParameter";

import { useDebouncedCallback } from 'use-debounce';

export function CharactersSearchInput() {
  const { searchQuery, updateSearchQuery } = useSearchQueryParameter();

  const debouncedOnChange = useDebouncedCallback(
    (value: string) => {
      updateSearchQuery(value);
    },
    300
  );

  return (
    <Input
      defaultValue={searchQuery}
      type="text"
      placeholder="Search characters..."
      onChange={({ target }) => debouncedOnChange(target.value)}
    />
  );
}
