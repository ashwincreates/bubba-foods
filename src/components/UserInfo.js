import { useContext } from "react";
import { User } from "react-feather";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function UserInfo() {
  const { user } = useContext(UserContext);
  return (
    <>
      <span className="hidden md:block">Welcome, {user ? user.Name__c : "Guest"}</span>
      {user ? (
        <Link to={`/profile/${user.Id}/details`}>
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
