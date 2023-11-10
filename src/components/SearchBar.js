import { useState } from "react";
import './searchBar.css'

function SearchBar({onSubmit}){
    const [term ,setTerm] = useState('');

    const handleFormSubmit = (event)=> {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event)=>{
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} placeholder="Search images"/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;