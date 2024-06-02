import React from 'react';
import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onOpen }) => {
	
	return <ul className={css.list}> 
		{items.map(item => <li className={css.item} key={item.id} >
			<ImageCard item={item} onOpen={onOpen}/>
	</li>)}
</ul>

}

export default ImageGallery;