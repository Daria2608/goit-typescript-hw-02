import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

export const fetchArticles = async (query, page) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: "5KkFA6dhwHl-DP5u-nMaN1Nk_pjwWJtnzbNZtOI64HM",
            query: query,
            per_page: 10,
            page: page
        }
    })
    
    return response.data.results
}

