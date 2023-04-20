import React from "react";
import { useAppDispatch } from "../redux/store";
import { logout } from "../redux/authSlice";

export const Navbar: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed top-0 left-0 bg-gray-900 shadow-md shadow-gray-400 w-full text-white">
      <div className="container p-3 mx-auto flex justify-between">
        <div className="font-bold text-lg flex items-center"><span>Testland</span></div>
        <ul className="list-none">
          <li className="inline-block ml-2">
            <a href="#Home">Home</a>
          </li>
          <li className="inline-block ml-2">
            <a href="#About">About</a>
          </li>
          <li className="inline-block ml-2">
            <button
              className="btn"
              onClick={(e) => {
                dispatch(logout({}));
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
