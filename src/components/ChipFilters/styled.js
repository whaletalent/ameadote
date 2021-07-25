import styled from 'styled-components';
import { theme } from '../../helpers/theme';
import media from "styled-media-query";

export const Wrapper = styled.section`
    padding: 2rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    ${media.lessThan("small")`
        padding: 1rem 0;
    `}
`;

export const FilterWrapper = styled.div`
    display: flex;
    gap: 1rem;
    ${media.lessThan("small")`
        overflow-y: auto;
    `}
    
    
`;

export const Chip = styled.div`
    background-color: ${theme.orange};
    padding: .5rem 2rem;
    color: white;
    font-weight: bold;
    display: flex;
    gap: 1rem;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    ${media.lessThan("small")`
        padding: .3rem 2rem;
    `}
`;

export const ChipIcon = styled.div`
    width: 32px;
    height: 32px;
    background-color: white;
  

`;

export const RightText = styled.span`
   ${media.lessThan("small")`
        display: none;
    `}
`;


