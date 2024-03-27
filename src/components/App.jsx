import { useEffect, useState } from "react";
import SearchBar from './SearchBar/SearchBar.jsx';
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import { fetchPhotosByInput } from "../photos-api.js";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./ImageModal/ImageModal.jsx";
// import Modal from 'react-modal';

//   const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
//   };

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
   
useEffect(() => {
    if (!inputSearch) return;
    async function fetchPhotos()  {
    try {
      setLoading(true);
      setError(false);
      const {total_pages,results}=await fetchPhotosByInput(inputSearch, page);
      setPhotos((prevPhotos) => [...prevPhotos, ...results]);
      setShowBtn(total_pages > page);
      
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false);
      }
    }
    fetchPhotos();
  }, [inputSearch,page])

const onSubmit = (inputSearch) => {
  setInputSearch(inputSearch);
  setPhotos([]);
  setPage(1);
  setShowBtn(false);
}

const onClickButton = () => {
  setPage(prevPage => prevPage + 1);
}

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length !== 0 && <ImageGallery photos={photos} openModal={openModal} />}
      {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} photos={photos}/>
    </div>
  );
};
export default App
