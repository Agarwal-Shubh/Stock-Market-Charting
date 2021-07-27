import React from 'react';
import { Navigate } from 'react-router-dom';
import AddCompany from './screens/Admin/AddCompany';
import AddExchange from './screens/Admin/AddExchange';
import AddSector from './screens/Admin/AddSector';
import CompanyList from './screens/Admin/CompanyListing';
import ExchangeList from './screens/Admin/ExchangeList';
import IpoList from './screens/Admin/IpoList';
import SectorList from './screens/Admin/SectorList';
import ViewCompany from './screens/Admin/ViewCompany';
import ViewExchange from './screens/Admin/ViewExchange';
import ViewSector from './screens/Admin/ViewSector';
import CompanyListing from './screens/CompanyListing';
import ExchangeListing from './screens/ExchangeListing';
import Home from './screens/Home';
import IPOListing from './screens/IpoListing';
import PageNotFound from './screens/NotFoundScreen';
import SectorListing from './screens/SectorListing';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import VerifyEmail from './screens/VerifyEmail';



let routes = (userInfo)=>[
    {
      path: '/',
      element: <Home />,
    },
    {
        path:'/login',
        element:<SignIn />
    },
    {
        path:'/signup',
        element:<SignUp />
    },
    {
        path:'/verifyEmail',
        element:<VerifyEmail />
    },
    {
        path:'/companies',
        element:userInfo?<CompanyListing />:<SignIn />
    },
    {
        path:'/compareCompany',
        element:userInfo?<CompanyListing />:<SignIn />
    },
    {
        path:'/sectors',
        element:userInfo?<SectorListing />:<SignIn />
    },
    {
        path:'/compareSectors',
        element:userInfo?<SectorListing />:<SignIn />
    },
    {
        path:'/exchanges',
        element:userInfo?<ExchangeListing />:<SignIn />
    },
    {
        path:'/ipos',
        element:userInfo?<IPOListing />:<SignIn />
    },
    {
        path:'/admin/companies',
        element:<CompanyList />
    },
    {
        path:'/admin/addCompany',
        element:<AddCompany />
    },
    {
        path:'/admin/viewCompany/:id',
        element:<ViewCompany />
    },
    {
        path:'/admin/exchanges',
        element:<ExchangeList />
    },
    {
        path:'/admin/addExchange',
        element:<AddExchange />
    },
    {
        path:'/admin/viewExchange/:id',
        element:<ViewExchange />
    },
    {
        path:'/admin/sectors',
        element:<SectorList />
    },
    {
        path:'/admin/addSector',
        element:<AddSector />
    },
    {
        path:'/admin/viewSector/:id',
        element:<ViewSector />
    },
    {
        path:'/admin/ipos',
        element:<IpoList />
    },
    {
      path: '*',
      element: <Navigate to='404' />,
    },
    {
        path:'/404',
        element:<PageNotFound />
    }
  ];

export default routes;