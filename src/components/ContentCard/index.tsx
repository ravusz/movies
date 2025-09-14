import { ReactNode } from "react";

type ContentCardProps = {
  children: ReactNode;
  title?: string;
};

export function ContentCard({ children, title }: ContentCardProps) {
  return (
    <div className="flex flex-col h-full w-full bg-white shadow-md rounded-2xl p-10">
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          {title}
        </h2>
      )}
      <div className="h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
