import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar.jsx'

const App = () => {
  
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
    </div>
  );
};
export default App
