import React, { useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Dashboardhome from "../component/dashboard/Dashboardhome";
import Dashboardpegawai from "../component/dashboard/Dashboardpegawai";

import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/dashboard.scss";

import Dashboardsetting from "../component/dashboard/Dashboardsetting";

function Dashboard() {
  const [pagesChange, setPagesChange] = useState<number>(0);

  return (
    <div className="dashboard">
      <Navbar />
      <main>
        <div className="container-dashboard">
          <div className="controller-dashboard">
            <button
              className="controller"
              onClick={() => {
                setPagesChange(0);
              }}
            >
              HOME
            </button>
            <button
              className="controller"
              onClick={() => {
                setPagesChange(1);
              }}
            >
              Pegawai
            </button>
            <button
              className="controller"
              onClick={() => {
                setPagesChange(2);
              }}
            >
              Pengaturan
            </button>
          </div>
          {(pagesChange === 0 && <Dashboardhome />) ||
            (pagesChange === 1 && <Dashboardpegawai />) ||
            (pagesChange === 2 && <Dashboardsetting />)}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
