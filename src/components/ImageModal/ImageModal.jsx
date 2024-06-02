import Modal from 'react-modal';
import { useEffect } from 'react';

Modal.setAppElement('#root')


const customStyles = {
   content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(101, 67, 33, 0.75)",
  },
}

export default function ImageModal({ image, alt, modalIsOpen, closeModal }) {
    if (!image) {
        return
    }
    
    return <div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        style={customStyles}>
            <img src={image} alt={alt} />
        </Modal>
        
    </div>
}