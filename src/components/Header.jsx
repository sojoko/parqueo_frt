import React from "react";
import { PiArrowCircleLeft } from "react-icons/pi";
import { PiUserCircle } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { button } from '@material-tailwind/react';

function Header() {
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveRegistrationEmployees, setIsActiveRegistrationEmployees] =
    useState(false);
  const [isActiveIndex, setIsActiveIndex] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsActiveHome(location.pathname === "/home");
    setIsActiveRegistrationEmployees(
      location.pathname === "/user-registration-employees"
    );
    setIsActiveIndex(location.pathname === "/");
  }, [location]);

  return (
    <header className="bg-amber-700 border-none lg:w-full w-full">
      <div className="container mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">
        {isActiveHome ? (
          <a href="/user-administration">
            <div className="w-12 h-12 lg:w-16 lg:h-16 text-gray-900 hover:text-purple-600">
              <PiUserCircle className="w-12 h-12 lg:w-16 lg:h-16" />
            </div>
          </a>
        ) : null}

        {!isActiveHome && !isActiveIndex ? (
          <button
            onClick={() => {
              if (isActiveRegistrationEmployees) {
                navigate(-2);
              } else {
                navigate(-1);
              }
            }}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 text-gray-900 hover:text-purple-600">
              <PiArrowCircleLeft className="w-12 h-12 lg:w-16 lg:h-16" />
            </div>
          </button>
        ) : null}

        <a href="/">
          <div className=" md:w-48 flex-shrink-0">
            <img
              className="h-14 lg:h-18 lg:w-18"
              src="/parqueo.png"
              alt="logo"
            />
          </div>
        </a>
      </div>
    </header>
  );
}
export { Header };
