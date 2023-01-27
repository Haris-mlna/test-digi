import React from "react";
import "../../scss/navbar.scss";
import {useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  return (
    <nav>
      <div className="lt-nav">PT DIGI TEKNO INDONESIA</div>
      <div className="mt-nav"></div>
      <div className="rt-nav">
        <button onClick={logout}>KELUAR</button>
      </div>
    </nav>
  );
}

export default Navbar;
