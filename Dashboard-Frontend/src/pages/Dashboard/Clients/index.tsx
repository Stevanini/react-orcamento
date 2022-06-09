import React from 'react';
import { PageTitle } from 'src/components';

import { Container } from './styles';

const Clients: React.FC = () => {
  return (
    <>
      <Container>
        <PageTitle
          onClick={() => console.log('AQUI')}
          textButton="Cadastrar Cliente"
          heading="Gerenciamento de Clientes"
        />
      </Container>
    </>
  );
};

export default Clients;
