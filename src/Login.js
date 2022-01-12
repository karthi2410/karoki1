import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
     <p>
       <center><h1>KAROKI</h1>
       <h3>Come Hear To  Get A Peace</h3></center>
     </p>
      <a href={accessUrl}>LOGIN TO Karoki</a>
    </div>
  );
}

export default Login;
