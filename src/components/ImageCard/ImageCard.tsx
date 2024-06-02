import css from "./ImageCard.module.css"
import React, { FC } from 'react';
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ item, onOpen }) => {
  const handleClick = () : void => {
  onOpen(item.urls.regular, item.alt_description)
}
    return <div>  
  <img onClick={handleClick} className={css.img} src={item.urls.small} alt={item.alt_description} />
</div>
}

export default ImageCard;