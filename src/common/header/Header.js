// import React, {Components} from "react";
// import "./Header.css";
// import logoUrl from "../../assets/logo.svg";
// class Header extends Components
// {
//     render()
//     {
//         return(
//             <div className="header">
//             <img src={logoUrl} alt="movie" />
//           </div>
//         );
//         }
//     }
// export default Header;

import React from "react";
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';

function Header() {
  const Login = "I am fixed :)";
  const Register = "I am not a fixed header :(";
  const (Login, setLogin) = useState(whenNotFixed);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (Login !== Register) {
          setHeaderText(fixedText);
        }
      } else {
        header.classList.remove("sticky");
        if (Login !== whenNotFixed) {
          setHeaderText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div>
      <header className="header">HEADER</header>
  
  <Button variant="contained" color="primary" login>
          Login
        </Button>
 
      <Button variant="contained" color="primary" logout>
          Logout
        </Button>
    
      <Button variant="contained" color="primary" bookShow>
          Book Show
        </Button>
      </div>
      );
}

export default Header;
