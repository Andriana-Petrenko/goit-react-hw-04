import toast, { Toaster } from 'react-hot-toast';
const SearchBar = ({ onSubmit }) => {
    
const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputSearch = form.elements.search.value;
          if (inputSearch.trim() === "") {
              toast.error('Please enter search term!');
              return;
          }
    onSubmit(inputSearch); 
  }

  return (
<header>
    <form onSubmit ={handleOnSubmit}>
       <input type="text" autoComplete="off" autoFocus  placeholder="Search images and photos" name="search"/>
       <button type="submit">Search</button>
       <Toaster position="top-right" reverseOrder={false}/>
  </form>
</header>

  )
}

export default SearchBar