import { ReactNode } from "react";

type ContentCardProps = {
  children: ReactNode;
  title?: string;
};

export function ContentCard({ children, title }: ContentCardProps) {
  return (
    <div className="w-full bg-white shadow-md rounded-2xl p-10">
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          {title}
        </h2>
      )}
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}
