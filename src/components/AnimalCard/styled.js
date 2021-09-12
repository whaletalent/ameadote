import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px; 
    grid-gap: 5rem;
    grid-row-gap: 10rem;
`;
export const Container = styled.div`
    height: 14rem;
    display: flex;
    flex-direction: column;
 `;
export const Card = styled.div`
    margin-top: 35px;
    height: 140px;
    border-radius: 30px 30px 0 0;
    background-color: #FFC2AD;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
export const InforAnimal = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
 `;
export const AnimalName = styled.div`
    font-size: 18px;
    font-weight:bold;
`;
export const AnimalYear = styled.div`
    font-size: 13px;
    margin-top: -10px;
`;
export const Favorite = styled.div`
    width: 25px;
    height: 25px;
    background-color: yellow;
`;
export const AnimalImage = styled.div`
background-color: grey;
    width:200px;
    height:210px;
`;
