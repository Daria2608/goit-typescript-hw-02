import { Photo } from "../App/App.types"

export interface ImageCardProps {
    item: Photo,
    onOpen: (url: string, alt: string) => void ;
}