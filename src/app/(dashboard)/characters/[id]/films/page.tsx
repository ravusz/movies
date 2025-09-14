import { CharacterMoviesTableBody, CharacterMoviesTableHeader } from "./components/CharacterMoviesTable"
import { Table, TableTbodySuspense } from "@/components/Table";
import { ContentCard } from "@/components/ContentCard";
import ArrowLeftIcon from "@/icons/arrow-left.svg";
import { ActionLink } from "@/components/ActionLink";
import { Routes } from "@/lib/constants/routes";

type CharacterFilmsPageProps = {
  params: Promise<{ id: string }>;
};

export default function CharacterFilmsPage({ params }: CharacterFilmsPageProps) {
  return (
    <ContentCard title="Character Films" action={
      <ActionLink href={Routes.Characters} title="Go back">
        <ArrowLeftIcon className="w-4" />
      </ActionLink>
    }>
      <div className="h-full relative overflow-auto">
        <Table className="absolute">
          <CharacterMoviesTableHeader />
          <TableTbodySuspense cellsCount={1}>
            <CharacterMoviesTableBody params={params} />
          </TableTbodySuspense>
        </Table>
      </div>
    </ContentCard>
  );
}
