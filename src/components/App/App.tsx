import './App.module.css'
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import {fetchArticles} from '../../api'
import { useState, useEffect } from 'react';

import { Photo } from './App.types';

export default function App() {

  const [articles, setArticles] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<string>('')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)
  const [image, setImage] = useState<string | null>(null)
  const [alt, setAlt] = useState<string | null>(null)

  const handleLoadMore = () : void => {
  setPage(page + 1)
}

  const handleSubmit = async (newArticles : string) : Promise<void>=> {
    setQuery(newArticles)
    setPage(1)
    setArticles([])
  }


  const openModal = (image : string, alt : string) : void => {
    setImage(image)
    setAlt(alt)
    setModalIsOpen(true)
  } 

  const closeModal = () : void => {
    setModalIsOpen(false)
  }


  useEffect(() : void => {
    if (!query) {
      return
    }
    async function getArticles() : Promise<void> { 
     try {
      setIsLoading(true);
      const data : Photo[] = await fetchArticles(query, page);
       setArticles(prevArticles => {
        return [...prevArticles, ...data]
      });
    } catch (error) {
      setError(true)
    }
    finally {
      setIsLoading(false)
    }
    }
    getArticles()
  }, [page, query])

  return <>
    <SearchBar onSubmit={handleSubmit} />
    {articles.length > 0 && <ImageGallery items={articles} onOpen={openModal} />}
    {error && <ErrorMessage/>}
    {isLoading && <Loader />} 
    {articles.length > 0 && <LoadMoreBtn onClick={handleLoadMore} /> }
    {modalIsOpen && <ImageModal image={image} alt={alt} modalIsOpen={modalIsOpen} closeModal={closeModal} />}
  </>
}

