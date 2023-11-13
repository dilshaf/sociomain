


import React from 'react';
import Card from './Card';
import Box from './Box';

function SearchList({ filteredPersons}) {
  const filtered = filteredPersons.map(person =>  <Box key={person.id} person={person}  />);
  
  console.log(filtered,'fil');
  return (
    <div>
      {/* {filtered.props.person} */}
      {filtered}
    </div>
  );
}

export default SearchList;
