import React from 'react';
import { Link } from 'react-router-dom';
import Appbar from '../../components/Appbar'
import ChipFilters from '../../components/ChipFilters';

// import { Container } from './styles';

function Home() {

    return <div>
        <Appbar></Appbar>
        <ChipFilters />
        <Link to="/profile">perfil</Link>
    </div>;
}

export default Home;