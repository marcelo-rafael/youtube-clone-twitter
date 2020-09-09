import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton

} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Marcelo Rafael Gonçalves</h1>
        <h2>@Eai_Marcelo</h2>

        <p>
          Develoer front-end at <a href="https://github.com/marcelo-rafael">@Marcelo</a>
        </p>

        <ul>
          <li><LocationIcon />
              São Paulo, Brasil</li>
          <li><CakeIcon />
              Nascido(a) em 27 de dezembro de 1989</li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
              </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
