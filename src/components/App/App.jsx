import './App.module.css'
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import {fetchArticles} from '../../api'

import { useState, useEffect } from 'react';

export default function App() {

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const [image, setImage] = useState(null)
  const [alt, setAlt] = useState(null)

  const handleLoadMore = () => {
  setPage(page + 1)
}

  const handleSubmit = async (newArticles) => {
    setQuery(newArticles)
    setPage(1)
    setArticles([])
  }


  const openModal = (image, alt) => {
    setImage(image)
    setAlt(alt)
    setModalIsOpen(true)
  } 

  const closeModal = () => {
    setModalIsOpen(false)
  }


  useEffect(() => {
    if (!query) {
      return
    }
    async function getArticles() { 
     try {
      setIsLoading(true);
      const data = await fetchArticles(query, page);
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

