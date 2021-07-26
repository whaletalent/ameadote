import React from 'react';
import { Link } from 'react-router-dom';
import Appbar from '../../components/Appbar'
import AnimalCard from '../../components/AnimalCard';
import ChipFilters from '../../components/ChipFilters';

// import { Container } from './styles';

function Home() {

    return <div>
        <Appbar></Appbar>
        <ChipFilters />
        <AnimalCard></AnimalCard>
        <Link to="/profile">perfil</Link>
    </div>;
}

export default Home;