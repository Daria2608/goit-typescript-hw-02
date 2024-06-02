
export interface ImageModalProps {
  image: string | null;
  alt: string | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}