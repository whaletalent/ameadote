import React from 'react';

import * as S from './styled';

function ChipFilters() {
    const chips = [];
    return <S.Wrapper>
        <S.FilterWrapper>

            <S.Chip>
                <S.ChipIcon></S.ChipIcon>
                chip
            </S.Chip>
            <S.Chip>
                <S.ChipIcon></S.ChipIcon>
                chip
            </S.Chip>

            <S.Chip>
                <S.ChipIcon></S.ChipIcon>
                chip
            </S.Chip>
            <S.Chip>
                <S.ChipIcon></S.ChipIcon>
                chip
            </S.Chip>
        </S.FilterWrapper>
        <S.RightText>

            233 Doguinhos adotados
        </S.RightText>
    </S.Wrapper>;
}

export default ChipFilters;