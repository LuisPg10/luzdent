import { LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';

interface SpecialCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SpecialCard = ({
  title,
  description,
  icon: Icon,
}: SpecialCardProps) => {
  return (
    <Card className="border-cyan-100 shadow-md transition-shadow hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
          <Icon className="h-6 w-6 text-cyan-600" />
        </div>
        <CardTitle className="text-xl text-cyan-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-500">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
