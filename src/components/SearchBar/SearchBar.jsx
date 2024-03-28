import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"
const SearchBar = ({ onSubmit }) => {
    
const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputSearch = form.elements.search.value;
          if (inputSearch.trim() === "") {
              toast('Please enter search term!', {
                  style: {
                      borderRadius: '10px',
                      background: 'linear-gradient(269deg, #10d1eb 0%, #e260e2 80%)',
                      color: '#fff',
                  },
              });
              return;
          }
    onSubmit(inputSearch); 
  }

  return (
<header>
    <form className={css.form} onSubmit ={handleOnSubmit}>
       <input className={css.input_search} type="text" autoComplete="off" autoFocus  placeholder="Search images and photos" name="search"/>
       <button className={css.btn_search} type="submit">Search</button>
       <Toaster position="top-right" reverseOrder={false}/>
  </form>
</header>

  )
}

export default SearchBar