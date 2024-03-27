import  css  from "./ImageModal.module.css"

const ImageModal = ({onClose}) => {
  return (
      <div className={ css.backdrop} onClick={onClose}>ImageModal</div>
  )
}

export default ImageModal