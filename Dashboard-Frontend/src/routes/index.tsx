import { Suspense, lazy } from 'react';
import { Route, Routes as ReactDOMRoutes } from 'react-router-dom';

import { SuspenseLoader } from 'src/components';

import { BaseLayout } from 'src/layouts/BaseLayout';
import { SidebarLayout } from 'src/layouts/SidebarLayout';

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Login = Loader(lazy(() => import('src/pages/Login')));

const Home = Loader(lazy(() => import('src/pages/Dashboard/Home')));
const Budget = Loader(lazy(() => import('src/pages/Dashboard/Budget')));
const Clients = Loader(lazy(() => import('src/pages/Dashboard/Clients')));
const Data = Loader(lazy(() => import('src/pages/Dashboard/Data')));
const Movements = Loader(lazy(() => import('src/pages/Dashboard/Movements')));
const Products = Loader(lazy(() => import('src/pages/Dashboard/Products')));

const Status404 = Loader(lazy(() => import('src/pages/Status/Status404')));
const StatusMaintenance = Loader(
  lazy(() => import('src/pages/Status/Maintenance')),
);

export const Routes = () => {
  return (
    <ReactDOMRoutes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Login />} />
        <Route path="/maintenance" element={<StatusMaintenance />} />
        <Route path="*" element={<Status404 />} />
      </Route>

      <Route path="dashboard" element={<SidebarLayout />}>
        <Route index element={<Home />} />
        <Route path="informacoes" element={<Data />} />
        <Route path="clientes" element={<Clients />} />
        <Route path="produtos" element={<Products />} />
        <Route path="orcamento" element={<Budget />} />
        <Route path="movimentacoes" element={<Movements />} />
        <Route path="*" element={<Status404 />} />
      </Route>
    </ReactDOMRoutes>
  );
};
