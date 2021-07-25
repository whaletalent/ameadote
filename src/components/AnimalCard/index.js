import React from 'react';

import * as S from './styled';

function AnimalCard() {
    return <S.Wrapper>
        <S.Container>
            <S.Card></S.Card>
            <S.NomeAnimal>Hugo</S.NomeAnimal>
        </S.Container>
        <S.Container>
            <S.Card></S.Card>
            <S.NomeAnimal>Hugo</S.NomeAnimal>
        </S.Container>
        <S.Container>
            <S.Card></S.Card>
            <S.NomeAnimal>Hugo</S.NomeAnimal>
        </S.Container>
    </S.Wrapper>;
}

export default AnimalCard;