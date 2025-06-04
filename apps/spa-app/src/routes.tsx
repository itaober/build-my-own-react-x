import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router';

import { Button } from './components/ui/button';

const ReduxPage = React.lazy(() => import('./pages/Redux'));
const ReactContextSelectorPage = React.lazy(() => import('./pages/ReactContextSelector'));

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button size={'icon'} variant={'ghost'} className="ml-4 mt-4" onClick={() => navigate('/')}>
        <ArrowLeftIcon />
      </Button>
      <Outlet />
    </div>
  );
};

export const pageList = [
  {
    title: 'Redux',
    description: '',
    path: '/redux',
    element: <ReduxPage />,
  },
  {
    title: 'React Context Selector',
    description: '',
    path: '/react-context-selector',
    element: <ReactContextSelectorPage />,
  },
];

export const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pageList.map(page => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Route>
    </Routes>
  );
};
