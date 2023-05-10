import { useContext } from "react";
import { User } from "react-feather";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function UserInfo() {
  const { user } = useContext(UserContext);
  return (
    <>
      Welcome, {user ? user.name : "Guest"}
      {/* <img
        style={{ maxWidth: "20px" }}
        src="images/logout.png"
        alt="user"
      ></img> */}
      {user ? (
        <Link to="/profile/wadd/details">
          <User size={20} />
        </Link>
      ) : (
        <>
          <Link to="/login" className="primary-button">
            Login
          </Link>
          <Link to="/register" className="secondary-button">
            Register
          </Link>
          {/* <Link to="/register" className="secondary-button">
            Logout
          </Link> */}
        </>
      )}
    </>
  );
}

export default UserInfo;
