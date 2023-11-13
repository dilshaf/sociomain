import React from 'react'; 
import './MovieBox.css'
import {Link} from 'react-router-dom'

const MovieBox = ({ movie }) => { 
	return ( 
		<div className="movie"> 
			
				<p>{movie.Title}</p> 
			
			
			
				<span>{movie.Type}</span> 
				<Link to='/product' movie={movie}><h3>{movie.Title}</h3> </Link>
			
		</div> 
	) 
} 
export default MovieBox;