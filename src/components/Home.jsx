import React from "react";
import Header from "./Header";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
function Home(){

    return <Header content="Recipe Finder" bgClass="bg-image"> 
    <Button as={Link} to="/recipes" variant="contained" className="search-button" style={{fontSize:28}}>SEARCH RECIPES</Button></Header>
}
export default Home;