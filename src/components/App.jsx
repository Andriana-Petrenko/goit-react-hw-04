import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar.jsx'

const App = () => {
  const onSubmit = (inputSearch) => {
  console.log(inputSearch);
}

  return (
    <div>
      <SearchBar onSubmit ={onSubmit}/>
    </div>
  );
};
export default App
