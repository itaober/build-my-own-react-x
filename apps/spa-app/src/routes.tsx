import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router';

import { Button } from './components/ui/button';

const ReduxPage = React.lazy(() => import('./pages/Redux'));

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

export const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/redux" element={<ReduxPage />} />
      </Route>
    </Routes>
  );
};
