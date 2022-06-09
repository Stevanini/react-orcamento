import React from "react";
import { Box, Container, Hidden, Link, Typography } from "@mui/material";
import { FooterWrapper } from "./styles";

export const Footer: React.FC = () => {
  return (
    <Hidden smDown>
      <FooterWrapper>
        <Container maxWidth="lg">
          <Box
            display={{ xs: "block", md: "flex" }}
            textAlign={{ xs: "center", md: "left" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="subtitle1">
                &copy; 2022 - Painel Orçamento
              </Typography>
            </Box>

            <Typography variant="subtitle1">
              Criado por{" "}
              <Link
                href="https://stevanini.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stevanini
              </Link>
            </Typography>
          </Box>
        </Container>
      </FooterWrapper>
    </Hidden>
  );
};
