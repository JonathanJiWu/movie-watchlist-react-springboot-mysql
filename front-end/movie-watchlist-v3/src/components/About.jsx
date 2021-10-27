import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Input = styled("input")({
  display: "none",
});

function About() {
  return (
    <Container>
      <Box sx={{ width: "95%", maxWidth: 1800 }}>
        <Typography variant="h2" paragraph component="div">
          <Box sx={{ m: 10, bgcolor: "background.paper" }}></Box>
          Find the dev of this site here!
          <Box sx={{ m: 15, bgcolor: "background.paper" }}></Box>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
