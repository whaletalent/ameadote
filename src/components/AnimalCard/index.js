import React from 'react';
import * as S from './styled';

function AnimalCard() {
    return <S.Wrapper>
        <S.Container>
            <S.Card>
                <S.AnimalImage src={'https://o.remove.bg/downloads/cc2dff50-2b6d-45dd-8a7a-58eb091f8cd2/pexels-miguel-constantin-montes-2623968-removebg-preview-removebg-preview.png'} />
            </S.Card>
            <S.InforAnimal>
                <S.AnimalName>Hugo</S.AnimalName>
                <S.Favorite></S.Favorite>
            </S.InforAnimal>
            <S.InforAnimal>
                <S.AnimalYear>24 meses</S.AnimalYear>
            </S.InforAnimal>
        </S.Container>
        <S.Container>
            <S.Card>
                <S.AnimalImage src={'https://o.remove.bg/downloads/cc2dff50-2b6d-45dd-8a7a-58eb091f8cd2/pexels-miguel-constantin-montes-2623968-removebg-preview-removebg-preview.png'} />
            </S.Card>
            <S.InforAnimal>
                <S.AnimalName>Hugo</S.AnimalName>
                <S.Favorite></S.Favorite>
            </S.InforAnimal>
            <S.InforAnimal>
                <S.AnimalYear>24 meses</S.AnimalYear>
            </S.InforAnimal>
        </S.Container>
        <S.Container>
            <S.Card>
                <S.AnimalImage src={'https://o.remove.bg/downloads/cc2dff50-2b6d-45dd-8a7a-58eb091f8cd2/pexels-miguel-constantin-montes-2623968-removebg-preview-removebg-preview.png'} />
            </S.Card>
            <S.InforAnimal>
                <S.AnimalName>Hugo</S.AnimalName>
                <S.Favorite></S.Favorite>
            </S.InforAnimal>
            <S.InforAnimal>
                <S.AnimalYear>24 meses</S.AnimalYear>
            </S.InforAnimal>
        </S.Container>
    </S.Wrapper>;
    
}

export default AnimalCard;