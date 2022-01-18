import "./Search.css";

const SearchBar = ({ className = "search", handleChange, placeholder }) => {

  return (<input 
    className={className} 
    type="search" 
    onChange={ handleChange }
    placeholder={placeholder}
     />);
};

export default SearchBar;