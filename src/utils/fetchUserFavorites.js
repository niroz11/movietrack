import { fetchOptions } from './fetchOptions';
import { fetchData } from './fetchData';

export const fetchUserFavorites = async(id) => {
    const url = `http://localhost:3000/api/users/${id}/favorites`;
    try{
    const options = await fetchOptions('GET')
    const result = await fetchData(url,options)
    if(result.status === "success"){
        const favorites = result.data
        return favorites;
    }
} catch(error){
    console.log("error fetching favorites")
    }
}

// export default fetchUserFavorites
