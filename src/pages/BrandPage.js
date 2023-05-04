import { NavLink, Outlet, useParams } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import { BrandProvider } from "../context/BrandContext";

function BrandPage() {

  const {id} = useParams()

  return (
    <BrandProvider id={id}>
      {/* Advertisement Carousel */}
      <Carousel className="md:mx-4 relative">
        {
          [1, 2, 3].map(e =>
            <Carousel.Item key={e} src={"https://images.unsplash.com/photo-1606491956689-2ea866880c84"} />
          )
        }
      </Carousel>
      {/* ---- */}
        <nav className="flex sticky top-[64px] bg-white z-30 justify-center border-b border-gray-200 pb-3 max-md:pt-3">
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