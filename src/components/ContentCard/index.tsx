import { ReactNode } from "react";

type ContentCardProps = {
  children: ReactNode;
  title?: string;
  action?: ReactNode
};

export function ContentCard({ children, title, action }: ContentCardProps) {
  return (
    <div className="flex flex-col h-full w-full bg-white shadow-md rounded-2xl p-10">
      <div className="inline-flex mb-4 gap-2 items-center">
        {action}
        {title && (
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
        )}
      </div>
      <div className="h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
