import logo from "../assets/img/logo_digi.png";
import Swal from "sweetalert2";
import AOS from "aos";
import "../scss/home.scss";
import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { API } from "../api/API";

function Home() {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(API);

    AOS.init({
      duration: 3000,
    });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const login = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (usernameLogin === "admin" && passwordLogin === "123") {
      Swal.fire({
        icon: "success",
        text: "You are logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else if (usernameLogin === username && passwordLogin === password) {
      Swal.fire({
        icon: "success",
        text: "You are logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="hommie">
      {loading ? (
        <Triangle
          height="80"
          width="80"
          color="#fff"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <div className="homepages">
          <div className="home-lt-side">
            <h1 data-aos="fade-up">WELCOME TO DIGI APP</h1>
          </div>
          <div className="home-rt-side">
            <img src={logo} alt="" className="logo" />
            <form action="" className="form-login">
              <div className="username-login">
                <label htmlFor="username">Username :</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUsernameLogin(e.target.value);
                  }}
                />
              </div>
              <div className="password-login">
                <label htmlFor="password">Passwords :</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setPasswordLogin(e.target.value);
                  }}
                />
              </div>
              <button
                className="submit-login"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
