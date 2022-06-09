import React from 'react';
import { PageTitle } from 'src/components';

import { Container } from './styles';

const Budget: React.FC = () => {
  return (
    <>
      <Container>
        <PageTitle
          onClick={() => console.log('AQUI')}
          textButton="Adicionar um orçamento"
          heading="Orçamento"
        />
      </Container>
    </>
  );
};

export default Budget;
