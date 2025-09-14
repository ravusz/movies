import { CharactersSearchInput } from "@/app/(dashboard)/components/CharactersSearchInput";
import { CharactersTableBody, CharactersTableHeader } from "@/app/(dashboard)/components/CharactersTable";
import { Table, TableTbodySuspense } from "@/components/Table";
import { ContentCard } from "@/components/ContentCard";

type CharactersPageProps = {
  searchParams: Promise<{ search?: string }>;
};

export default function CharacterFilmsPage({ searchParams }: CharactersPageProps) {
  return (
    <ContentCard title="Character Films">
      films
    </ContentCard>
  );
}
