
import React from "react";

function Searchbar(props){
    return <form onSubmit={props.handleSubmit}  >
        <input type="text" value={props.query} placeholder="Search Recipe" disabled={props.isLoading} onChange={props.handleChange} />
        <input type="submit"  value="Search" disabled={props.isLoading|| !props.query}/>
    </form>
}

export default Searchbar;