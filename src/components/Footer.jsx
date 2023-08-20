import React from "react";

function Footer(){
    const date=new Date();
    const curryear=date.getFullYear();
    return (<footer>
        <p>Copyright ⓒ {curryear}</p>
      </footer>);
}
export default Footer;