import css from "./ImageCard.module.css"

export default function ImageCard({ item, onOpen }) {
  const handleClick = () => {
  onOpen(item.urls.regular, item.alt_description)
}
    return <div>  
  <img onClick={handleClick} className={css.img} src={item.urls.small} alt={item.alt_description} />
</div>
}