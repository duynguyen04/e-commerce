import React from "react";
import UserAPI from "../API/UserAPI";

function LoginLink(props) {
  // const dispatch = useDispatch();

  const onRedirect = () => {
    localStorage.clear();
    UserAPI.postLogout();
  };

  return (
    <li className="nav-item" onClick={onRedirect}>
      <a className="nav-link" href="/signin">
        ( Logout )
      </a>
    </li>
  );
}

export default LoginLink;
