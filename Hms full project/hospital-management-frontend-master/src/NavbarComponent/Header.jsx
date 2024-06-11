import { Link } from "react-router-dom";
import logo from "../images/doc.png";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-success text-color">
        <div className="container-fluid text-color">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top me-3"
            alt=""
          />
          
          <Link to="/" className="navbar-brand ">
            
            
            <b className="text-white">Smile Matters</b>
            
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
