import React, { useState } from "react";
import './css/navbar.css'
import { Link } from "react-router-dom";
export default function Navbar(){
   const [currentPage, setCurrentPage] = useState('home')
    function isActice(Cpage){
       console.log(typeof(Cpage));
        setCurrentPage(Cpage)
    }

    return (
      <div className="navbar">
        <nav>
          <img
            className="logo-img"
            src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
            alt="logo"
          />
          <h2 className="app-title">Digipplus</h2>
          <ul>
            <Link to="/">
              <li
                className={currentPage === "home" ? "select" : ""}
                onClick={() => isActice("home")}
              >
                HOME
              </li>
            </Link>
            <Link to="/my-jobs">
              <li
                className={currentPage === "job" ? "select" : ""}
                onClick={() => isActice("job")}
              >
                MY JOBS
              </li>
            </Link>
            <Link to="/my-payment">
              <li
                className={currentPage === "payment" ? "select" : ""}
                onClick={() => isActice("payment")}
              >
                MY PAYMENTS
              </li>
            </Link>
          </ul>
          <img
            className="user-profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6Pf2w2WEjOMMLauB41tFNcCC72_U_j3lvw&usqp=CAU"
            alt="user-profile"
          />
        </nav>
      </div>
    );
}