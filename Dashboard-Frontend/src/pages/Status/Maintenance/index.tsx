import { Box, Typography, Container } from "@mui/material";

import { MainContent } from "./styles";

import Maintenance from "src/assets/images/status/maintenance.svg";

function StatusMaintenance() {
  return (
    <>
      <MainContent>
        <Container maxWidth="md">
          <Box className="flex flex-col text-center">
            <Container maxWidth="sm">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                O site está atualmente em manutenção
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                Pedimos desculpas por quaisquer inconvenientes causados
              </Typography>
            </Container>
            <img alt="Maintenance" className="h-56" src={Maintenance} />
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default StatusMaintenance;
