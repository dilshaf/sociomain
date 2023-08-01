import { base_URL } from "./base"
import { categories, random, search_end } from "./endPoints"

export const getCategories =() =>{

    // call api and return
    let response = fetch(`${base_URL}/${categories}`)
 
    return response;

}


export const searchCategories =(item) =>{

    // call api and return
    let response = fetch(`${base_URL}/search.php?s=${item}`)
 
    return response;

}