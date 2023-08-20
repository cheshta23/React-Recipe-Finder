import React from "react";

function Header(props){
    return <div className={props.bgClass}>
        <div className="content">
        <h1 className="header-title"> {props.content}</h1>
           
        {props.children}
        </div>
    </div>;
}

export default Header;