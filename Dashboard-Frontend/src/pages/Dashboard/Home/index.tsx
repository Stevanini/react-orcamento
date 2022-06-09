import React from 'react';
import { PageTitle } from 'src/components';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <PageTitle
          heading="Olá, Cléverson!"
          subHeading="Seja bem-vindo, aproveite todas funcionalidades que disponibilizamos para você."
        />
      </Container>
    </>
  );
};

export default Home;
