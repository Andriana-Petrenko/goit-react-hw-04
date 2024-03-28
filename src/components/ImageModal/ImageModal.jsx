import  "./ImageModal.module.css"
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ImageModal = ({onClose, urlModal,isOpen,description}) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Large Image Modal"
          style={customStyles}
          overlayClassName="Overlay"
    >
        <img src={urlModal} alt={description} />
    </Modal>
  )
}

export default ImageModal


