import React, {Components} from "react";
import "./Header.css";
import logoUrl from "../../assets/logo.svg";
class Header extends Components
{
    render()
    {
        return(
            <div className="header">
            <img src={logoUrl} alt="movie" />
          </div>
        );
        }
    }
export default Header;