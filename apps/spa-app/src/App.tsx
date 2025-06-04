import { BrowserRouter, useLocation, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { pageList, PageRoutes } from './routes';

const DemoCardGrid = () => {
  const navigate = useNavigate();

  const location = useLocation();

  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {pageList.map(item => (
        <Card key={item.path} className="w-full">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" onClick={() => navigate(item.path)}>
              Go
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <PageRoutes />
        <DemoCardGrid />
      </div>
    </BrowserRouter>
  );
}

export default App;
