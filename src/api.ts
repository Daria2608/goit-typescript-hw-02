import axios, { AxiosResponse } from "axios";
import { PhotoResponce } from '../types'
import { Photo } from './components/App/App.types';
axios.defaults.baseURL = "https://api.unsplash.com/"


export const fetchArticles = async (query : string, page : number) : Promise<Photo[]> => {
    const response : AxiosResponse<PhotoResponce>= await axios.get("/search/photos", {
        params: {
            client_id: "5KkFA6dhwHl-DP5u-nMaN1Nk_pjwWJtnzbNZtOI64HM",
            query: query,
            per_page: 10,
            page: page
        }
    })
    console.log(response.data.results);
    
    return response.data.results
}

