import React from 'react';
import Appbar from '../../components/Appbar'
import AnimalCard from '../../components/AnimalCard';
import ChipFilters from '../../components/ChipFilters';

// import { Container } from './styles';

function Home() {

    return <div className="page-wrapper">
        <Appbar></Appbar>
        <ChipFilters />
        <AnimalCard></AnimalCard>
    </div>;
}

export default Home;