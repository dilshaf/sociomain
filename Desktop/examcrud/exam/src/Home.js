import React, { useState } from 'react'; 
import { useEffect } from 'react'; 
 import './Home.css'
import MovieBox from './MovieBox';

const API = 'https://omdbapi.com?apikey=fe2f6c44'; 
const App = () => { 
	const [movies, setMovies] = useState([]); 
	const [search, setSearch] = useState([]);

	const searchMovies = async (title) => { 
		const response = await fetch(`${API}&s=${title}`); 
		const data = await response.json();
        console.log(data,'data'); 
		setMovies(data.Search); 
	} 
    
	useEffect(() => { 
		searchMovies('SpiderMan'); 
	}, []); 

	return ( 
		<div className="app"> 
			<h1 className='head'>Explore our Movies</h1> 

			<div className="search"> 
				<input 
					placeholder="Search for Movies"
					value={search} 
                    className='searchinput'
					onChange={(e) => { setSearch(e.target.value) }} 
				/>


				<button 
					onClick={() => searchMovies(search)} 
                
				className='button'> Search here</button>


			</div> 
            <div className='display'>

			{ 
				movies?.length > 0 ?
					 (<div className="container"> 
						{movies.map((movie) => ( 
							<MovieBox movie={movie} /> 
						))} 
					</div>) : ( 

						<div > 
							<h2>no found</h2> 
						</div> 
					) 
			} 
            </div>
		</div> 
	); 
} 
export default App;