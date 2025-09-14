import { redirect } from "next/navigation";

import { Routes } from "@/lib/constants/routes";

type CharacterPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = (await params)

  redirect(`${Routes.Characters}/${id}${Routes.Films}`);
}
