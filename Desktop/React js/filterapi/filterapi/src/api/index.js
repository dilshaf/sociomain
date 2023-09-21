import { area, categories, search } from "./endpoint";
import { base_URL } from "./base";

export const Categoriesapi =() =>{
    let response = fetch(`${base_URL}/${area}`) 
    return response;

}

export const Searchapi=(item)=>{
    let response=fetch(`${base_URL}/search.php?s=${item}`)
    return response
}