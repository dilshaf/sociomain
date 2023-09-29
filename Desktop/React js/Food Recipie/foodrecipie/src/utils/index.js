
const id="2d7802aa"
const key="eefe136eabcd52cad49a1e0d7f968a91"
export async function fetchRecipes (filter){
    const {query, limit} = filter

    const url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();
    
    return data?.hits;
}

export async function fetchRecipe(id_){

const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id_}&app_id=2d7802aa&app_key=eefe136eabcd52cad49a1e0d7f968a91`

const response = await fetch(url)

const data = await response.json();

return data[0];
}