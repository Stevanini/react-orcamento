import { Box, Typography, Container, Button } from "@mui/material";

import { MainContent } from "./styles";
import Error404 from "src/assets/images/status/404.svg";

function Status404() {
  return (
    <>
      <MainContent>
        <Container maxWidth="md">
          <Box className="flex flex-col text-center">
            <img alt="404" className="h-44" src={Error404} />
            <Typography variant="h2" sx={{ my: 2 }}>
              A página que você estava procurando não existe.
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              É por nossa conta, movemos o conteúdo para uma página diferente. A
              pesquisa abaixo deve ajudar!
            </Typography>
          </Box>
          <Container
            maxWidth="sm"
            sx={{
              textAlign: "center",
            }}
          >
            <Button href="/dashboard/home" variant="outlined">
              Ir para página inícial
            </Button>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Status404;
