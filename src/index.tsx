import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import {RegistroAprendiz} from './pages/RegistroAprendiz';
import { RegistrationStatusFormView } from './pages/RegistrationStatusFormView';
import { LoggedHome } from './pages/LoggedHome';
import { QRGeneratorView } from './pages/QRGeneratorView';
import ProtectedRoute from './pages/ProtectedRoute';
import { AuthProvider } from "./auth/AuthProvider.tsx";
import { PageNotFound } from './layout/404.tsx';
import { UserAdminSection } from './pages/userAdminSection.jsx';
import { UserListView } from './pages/UserListView.jsx';
import { RegistrationEmployers } from './pages/RegistrationEmployers.jsx';
import { RegistrationRequestList } from './pages/RegistrationRequestList.jsx';
import { SetPasswordView } from './pages/SetPasswordView.jsx';
import { AprendizDataTabView } from './pages/AprendizDataTabList.jsx';
import { AprendizCardInfoView } from './pages/AprendizCardInfoView.jsx';
import { UserAdministrationView } from './pages/UserAdministrationView.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
      path: '/registro-aprendiz',
      element: <RegistroAprendiz />
  },
  {
      path: '/estado-solicitud-registro',
      element: <RegistrationStatusFormView />
  }, 
  {
      path: '/',
      element: <ProtectedRoute/>,
      children:[
          {
            path: '/users-administration',
            element: <UserAdminSection/>
        }
      ]
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
        {
          path: '/users-administration-list',
          element: <UserListView/>
      }
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
        {
          path: '/user-registration-employees',
          element: <RegistrationEmployers/>
      }
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
        {
          path: '/user-registration-request',
          element: <RegistrationRequestList/>
      }
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
      {
        path: '/home',
        element: <LoggedHome />
    }
  ]
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
      {
        path: '/qr-generator',
        element: <QRGeneratorView />
    }
  ]
  },  
  {
        path: '/set-password',
        element: <SetPasswordView />
  
  },  
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
      {
        path: '/aprendiz-info-full',
        element: <AprendizDataTabView />
    }
  ]
  },  
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
      {
        path: '/aprendiz-info',
        element: <AprendizCardInfoView />
    }
  ]
  },  
  {
    path: '/',
    element: <ProtectedRoute/>,
    children:[
      {
        path: '/user-administration',
        element: <UserAdministrationView />
    }
  ]
  },  


]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>     
    <AuthProvider>
      <RouterProvider router={router} />   
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
