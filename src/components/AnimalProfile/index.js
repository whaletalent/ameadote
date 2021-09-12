import React from 'react';
import * as S from './styled';

function AnimalProfile() {
  return <S.Card1>
    <S.Profile>
      <img src="/imgs/hugo.png" img />
    </S.Profile>
    <S.Card2>
      <S.Token>Ficha do Hugo</S.Token>
      <S.More1>24 meses - Beagles - Macho</S.More1>
      <S.Public>Publicado em 20 de mar 2020</S.Public>
      <S.Postage>Porte</S.Postage>
      <S.Temperament>
        temperamentos
      </S.Temperament>
      <S.Lifein>Saude</S.Lifein>
      <S.Lifein>Sociavel</S.Lifein>
      <S.Lifein>Vive bem em </S.Lifein>
      <S.Lastv>Ultima vacinação</S.Lastv>
      <S.More2> <p1>Detalhes </p1><br></br>
        <p>
          Para adoção responsável - Porte M
          Antes de se candidatar, consulte:
          seu bolso, sua paciência, suas alergias, todos o que moram com você.
          Lembre-se, filhotes precisam ser ensinados e assistidos,
          vivem até 15 anos e precisam ser cuidados por toda vida e não só quando são filhotes.
        </p>
      </S.More2>
    </S.Card2>

  </S.Card1>



}
export default AnimalProfile;