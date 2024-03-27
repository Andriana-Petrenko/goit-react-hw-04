import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({ photos, openModal }) => {
    return (
        <ul className={css.gallery_list}>
            {photos.map(photo => {
                return <li className={css.gallery_item} key={photo.id} onClick={openModal}>
                    <ImageCard url={photo.urls.small} description={photo.alt_description} />
                </li>
            })}
	
        </ul>

    )

}

export default ImageGallery
