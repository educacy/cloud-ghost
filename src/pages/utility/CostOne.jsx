import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import NotFoundImage from '../../images/404-illustration.svg';
import DashboardCard011 from "../../partials/dashboard/DashboardCard011";
import DashboardCard01 from "../../partials/dashboard/DashboardCard01";
import axios from "axios"
import Config from "../../config.json"
function PageNotFound() {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  React.useEffect(() => {
    const getData = async() => {
      const rdata = await axios.get(`${Config.ApiDomain}/query/aws/cost-acc-daily`);
      const data = rdata.data;
      console.log("This is data:",data)
    }
    getData();
  })

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard011 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard011 />
              

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default PageNotFound;