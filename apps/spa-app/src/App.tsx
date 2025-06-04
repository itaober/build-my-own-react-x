import { BrowserRouter, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { PageRoutes } from './routes';

const demoList = [
  {
    title: 'Redux',
    description: '',
    path: '/redux',
  },
];

const DemoCard = ({ title, description, path }: (typeof demoList)[number]) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" onClick={() => navigate(path)}>
          Go
        </Button>
      </CardFooter>
    </Card>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <PageRoutes />
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {demoList.map(item => (
            <DemoCard key={item.path} {...item} />
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
