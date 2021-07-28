import React from 'react';
import { Navigate } from 'react-router-dom';
import AddCompany from './screens/Admin/AddCompany';
import AddExchange from './screens/Admin/AddExchange';
import AddIpo from './screens/Admin/AddIpo';
import AddSector from './screens/Admin/AddSector';
import AddStockPrice from './screens/Admin/AddStockPrice';
import CompanyList from './screens/Admin/CompanyListing';
import ExchangeList from './screens/Admin/ExchangeList';
import IpoList from './screens/Admin/IpoList';
import SectorList from './screens/Admin/SectorList';
import ViewCompany from './screens/Admin/ViewCompany';
import ViewExchange from './screens/Admin/ViewExchange';
import ViewIpo from './screens/Admin/ViewIpo';
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
        element:userInfo && userInfo.admin?<CompanyList />:<Navigate to='404' />
    },
    {
        path:'/admin/addCompany',
        element: userInfo && userInfo.admin?<AddCompany />:<Navigate to='404' />
    },
    {
        path:'/admin/viewCompany/:id',
        element: userInfo && userInfo.admin?<ViewCompany />:<Navigate to='404' />
    },
    {
        path:'/admin/exchanges',
        element:userInfo && userInfo.admin?<ExchangeList />:<Navigate to='404' />
    },
    {
        path:'/admin/addExchange',
        element:userInfo && userInfo.admin?<AddExchange />:<Navigate to='404' />
    },
    {
        path:'/admin/viewExchange/:id',
        element:userInfo && userInfo.admin?<ViewExchange />:<Navigate to='404' />
    },
    {
        path:'/admin/sectors',
        element:userInfo && userInfo.admin?<SectorList />:<Navigate to='404' />
    },
    {
        path:'/admin/addSector',
        element:userInfo && userInfo.admin?<AddSector />:<Navigate to='404' />
    },
    {
        path:'/admin/viewSector/:id',
        element:userInfo && userInfo.admin?<ViewSector />:<Navigate to='404' />
    },
    {
        path:'/admin/ipos',
        element:userInfo && userInfo.admin?<IpoList />:<Navigate to='404' />
    },
    {
        path:'/admin/ViewIpo/:id',
        element:userInfo && userInfo.admin?<ViewIpo />:<Navigate to='404' />
    },
    {
        path:'/admin/addIpo',
        element:userInfo && userInfo.admin?<AddIpo />:<Navigate to='404' />
    },
    {
        path:'/admin/addStockPrice',
        element:userInfo && userInfo.admin?<AddStockPrice />:<Navigate to='404' />
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