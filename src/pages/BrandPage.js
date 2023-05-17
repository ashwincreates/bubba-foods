import { NavLink, Outlet, useParams } from "react-router-dom";
import AdCarousel from "../components/Carousel/adCarousel";
import { BrandProvider } from "../context/BrandContext";

function BrandPage() {

  const {id} = useParams()

  return (
    <BrandProvider id={id}>
        <AdCarousel/>
        <nav className="flex sticky top-[64px] bg-white z-30 justify-center border-b border-gray-200 py-3 max-md:pt-3">
          <div>
            <NavLink
              className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
              to={`delivery`}>
              Delivery
            </NavLink>
            <NavLink
              className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
              to={`dining`}>
              Dining
            </NavLink>
          </div>
        </nav>
        <Outlet />
    </BrandProvider>
  )
}

export default BrandPage
