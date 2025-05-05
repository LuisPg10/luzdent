import { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';

interface CustomCardProps {
  id?: string;
  title: string;
  description: string;
  headerComponent?: ReactNode;
  image?: string;
}

export const CustomCard = ({
  id,
  title,
  description,
  headerComponent,
  image,
}: CustomCardProps) => {
  return (
    <Card
      id={id}
      className="border-cyan-100 shadow-md transition-shadow hover:shadow-lg"
      withImage={!!image}
    >
      {image && (
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      )}

      <CardHeader className="pb-2">
        {headerComponent}
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
