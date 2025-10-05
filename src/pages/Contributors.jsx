import React from 'react';
import contributors from '../Jsons/Contributors.json'; 
import ContributorsGrid from '../Components/ContributorsGrid/ContributorsGrid';
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Nav/Nav';

const Contributors = () => {
  return (
    <div>
     <Nav />
     <ContributorsGrid contributors={contributors}/>
     <Footer/>
    </div>
  )
}

export default Contributors;