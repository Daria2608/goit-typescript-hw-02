import { Photo } from "../App/App.types";

export interface ImageGalleryProps {
  items: Photo[];
  onOpen: (url: string, alt: string) => void;

}