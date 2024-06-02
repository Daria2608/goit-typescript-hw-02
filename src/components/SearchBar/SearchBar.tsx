
import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';
import React, { FormEvent, FC } from 'react';
import { SearchBarProps } from './SearchBar.types';


const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => { 

    const notify = () => toast.error('It`s required', {
    duration: 2000,
    position: "top-center",
        style: {
            backgroundColor: "orange"
           }
        });

    const hendleSearch = (e : FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        const form = e.target as HTMLFormElement;
        const queryInput = form.elements.namedItem('search') as HTMLInputElement; 
        const query : string = queryInput.value.trim();
        if (query === "") {
            notify()
        }
        else {
            onSubmit(query)
            form.reset()
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
export default SearchBar;