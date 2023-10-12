import React from 'react';
import contributors from '../Jsons/Contributors.json'; 
import ContributorsGrid from '../Components/ContributorsGrid/ContributorsGrid';
import Footer from '../Components/Footer/Footer';

const Contributors = () => {
  return (
    <div>
     <ContributorsGrid contributors={contributors}/>
     <Footer/>
    </div>
  )
}

export default Contributors;