import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import * as reactRouterDom from "react-router-dom";


import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';

import Customers from './pages/ecommerce/Customers';
import Orders from './pages/ecommerce/Orders';
import Orders2 from './pages/ecommerce/Orders2';
import Orders3 from './pages/ecommerce/Orders3';


import Calendar from './pages/Calendar';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';
import Apps from './pages/settings/Apps';
import Plans from './pages/settings/Plans';
import Billing from './pages/settings/Billing';
import Feedback from './pages/settings/Feedback';
import Changelog from './pages/utility/Changelog';
import Roadmap from './pages/utility/Roadmap';
import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
import CloudService from './pages/utility/CloudService';
import PageNotFound from './pages/utility/PageNotFound';
import KnowledgeBase from './pages/utility/KnowledgeBase';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Onboarding01 from './pages/Onboarding01';
import Onboarding02 from './pages/Onboarding02';
import Onboarding03 from './pages/Onboarding03';
import Onboarding04 from './pages/Onboarding04';
import ButtonPage from './pages/component/ButtonPage';
import CostOne from "./pages/utility/CostOne";
import axios from "axios";

// import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import SuperTokensRequest from 'supertokens-website';

SuperTokensRequest.addAxiosInterceptors(axios);

SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: "Cloud Ghost",
        apiDomain: "http://localhost:5000",
        websiteDomain: "http://localhost:5173/",
        apiBasePath: '/auth',
        websiteBasePath: "/dashboard",
    },
    recipeList: [
        EmailPassword.init(),
        Session.init()
    ]
});


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <SuperTokensWrapper>
        <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route exact path="/" element={
              <SessionAuth><Dashboard /></SessionAuth> 
            } />
            <Route path="/dashboard/analytics" element={<Analytics />} />

            <Route path="/ecommerce/customers" element={<Customers />} />
            <Route path="/ecommerce/orders" element={<Orders />} />
            {/* <Route path="/ecommerce/orders/one" element={<Orders />} /> */}
            <Route path="/ecommerce/orders/second" element={<Orders2 />} /> 
            <Route path="/ecommerce/orders/third" element={<Orders3 />} /> 
            <Route path="/cost/one" element={<CostOne />} />



            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings/account" element={<Account />} />
            <Route path="/settings/notifications" element={<Notifications />} />
            <Route path="/settings/apps" element={<Apps />} />
            <Route path="/settings/plans" element={<Plans />} />
            <Route path="/settings/billing" element={<Billing />} />
            <Route path="/settings/feedback" element={<Feedback />} />
            <Route path="/utility/changelog" element={<Changelog />} />
            <Route path="/utility/roadmap" element={<Roadmap />} />
            <Route path="/utility/faqs" element={<Faqs />} />
            <Route path="/utility/empty-state" element={<EmptyState />} />
            <Route path="/cloudservices" element={<CloudService />} />
            <Route path="/utility/404" element={<PageNotFound />} />
            <Route path="/utility/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/onboarding-01" element={<Onboarding01 />} />
            <Route path="/onboarding-02" element={<Onboarding02 />} />
            <Route path="/onboarding-03" element={<Onboarding03 />} />
            <Route path="/onboarding-04" element={<Onboarding04 />} />
            <Route path="/component/button" element={<ButtonPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </SuperTokensWrapper>
    </>
  );
}

export default App;
