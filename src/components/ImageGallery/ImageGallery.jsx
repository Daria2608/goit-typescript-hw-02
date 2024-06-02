import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery({ items, onOpen }) {
	
	return <ul className={css.list}> 
		{items.map(item => <li className={css.item} key={item.id} >
			<ImageCard item={item} onOpen={onOpen}/>
	</li>)}
</ul>

}