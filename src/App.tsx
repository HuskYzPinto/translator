import Translator from "./components/Translator";

import { Typography, Box, Container } from "@mui/material";

const App = () => (
  <Box
    display="flex"
    flexDirection="column"
    sx={{ bgcolor: "grey.100", height: "100vh" }}>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={2}
      sx={{ bgcolor: "primary.main" }}
      height="10%">
      <Typography fontWeight="700" textAlign="center" variant="h3">
        Typo Translator for the Noobs
      </Typography>
    </Box>
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        minWidth="50%"
        minHeight="80vh">
        <Box textAlign="center" padding={1}>
          <Translator />
          <Typography paddingTop="2rem">
            {" "}
            If it shows as undefined, press enter again{" "}
          </Typography>
          <Typography> ถ้าคำแปลไม่ขึ้นให้กด enter อีกครั้ง</Typography>
          <Typography marginTop="2rem" fontStyle="italic">
            Disclaimer: This project is made purely for fun, I know the colour
            theme is absolutely cancerous, but screw you :)
          </Typography>
        </Box>
      </Box>
    </Container>
    <Box
      display="flex"
      justifyContent="center"
      padding={2}
      textAlign="center"
      sx={{ bgcolor: "primary.main" }}
      height="10%">
      <Typography> Made by Huskiez </Typography>
    </Box>
  </Box>
);

export default App;
