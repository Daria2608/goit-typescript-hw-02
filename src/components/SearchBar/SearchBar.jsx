
import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
    
    const notify = () => toast.error('It`s required', {
    duration: 2000,
    position: "top-center",
        style: {
            backgroundColor: "orange"
           }
        });

    const hendleSearch = (e) => {

        e.preventDefault()
        const query = e.target.elements.search.value.trim();
        if (query === "") {
            notify()
        }
        else {
            onSubmit(query)
            e.target.reset()
        }
    }

    return <header className={css.form}>
  <form  onSubmit={hendleSearch}>
            <input
      className={css.input}
      type="text"
      autoComplete="off"
      name="search"
      autoFocus
      placeholder="Search images and photos"
    />
            <button className={css.button} type="submit">Search</button>
             <Toaster />
  </form>
</header>
}