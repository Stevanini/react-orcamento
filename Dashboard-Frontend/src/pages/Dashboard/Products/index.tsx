import React from 'react';
import { KeyboardArrowLeft } from '@mui/icons-material';

import { PageTitle } from 'src/components';

import { Container } from './styles';

const Products: React.FC = () => {
  return (
    <>
      <Container>
        <PageTitle
          onClick={() => console.log('AQUI')}
          textButton="Adicionar novo produto"
          heading="Todos Produtos"
          subHeading="Preencha os campos abaixo para criar um novo produto."
        />
      </Container>
    </>
  );
};

export default Products;
