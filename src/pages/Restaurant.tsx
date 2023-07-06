import { useState } from "react";
import { Star } from "react-feather"
import { NavLink, Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Popup from "./Popup";
import ReviewPhotoMenu from "./ReviewPhotoMenu"

function Restaurant() {
  const [showPopup, setShowPopup] = useState(false);

  const handleBookTableClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Banner src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4">
        <div className="flex text-white absolute bottom-4 w-full max-md:px-4">
          <div className="max-w-3xl m-auto w-full flex justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Behrouz Cafe</h1>
              <div className="text-white rounded-full px-2 py-1 bg-green-800 flex self-start text-sm gap-1"><span>3.4</span> <Star fill="white" size={18} /></div>
              <p className="font-light">Description</p>
            </div>
            <Popup/>
          </div>
        </div>
      </Banner>
      <nav className="flex bg-white justify-center border-b border-gray-200 py-3 max-md:pt-3">
        <div>
          <NavLink
            className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
            to={`reviews`}>
            Reviews
          </NavLink>
          <NavLink
            className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
            to={`photos`}>
            Photos
          </NavLink>
          <NavLink
            className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
            to={`menu`}>
            Menu
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Restaurant