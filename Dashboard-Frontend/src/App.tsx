import { QueryClient, QueryClientProvider } from "react-query";

import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";

import ThemeProvider from "src/contexts/ThemeContext";

import { Routes } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <SnackbarProvider
      maxSnack={6}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
