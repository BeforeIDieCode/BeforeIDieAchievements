import React from 'react';
import contributors from '../Jsons/Contributors.json'; 
import ContributorsGrid from '../Components/ContributorsGrid/ContributorsGrid';

const Contributors = () => {
  return (
    <div>
     <ContributorsGrid contributors={contributors}/>
    </div>
  )
}

export default Contributors;