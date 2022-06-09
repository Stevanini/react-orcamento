import React from 'react';
import { PageTitle } from 'src/components';

import { Container } from './styles';

const Movements: React.FC = () => {
  return (
    <>
      <Container>
        <PageTitle
          heading="Olá, Cléverson!"
          subHeading="Hoje é um bom dia para gerenciar suas vendas!"
        />
      </Container>
    </>
  );
};

export default Movements;
