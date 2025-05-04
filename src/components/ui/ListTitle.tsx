import { LucideIcon } from 'lucide-react';

interface ListTitleProps {
  icon?: LucideIcon;
  title: string;
  content?: string[];
}

export const ListTitle = ({ icon: Icon, title, content }: ListTitleProps) => {
  return (
    <div className="flex items-center gap-3">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
          {<Icon className="h-5 w-5 text-cyan-600" />}
        </div>
      )}

      <div>
        <h3 className="font-medium text-cyan-800">{title}</h3>
        {content &&
          content.map((data, i) => (
            <p key={i} className="text-gray-500">
              {data}
            </p>
          ))}
      </div>
    </div>
  );
};
