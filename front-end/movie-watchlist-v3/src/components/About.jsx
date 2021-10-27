import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import jonlearnjava from "../resource/jonlearnjava.png"

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
        </Typography>
      </Box>

      <Container container justify="center">
        <Card sx={{ maxWidth: 330, maxHeight:800 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              src={jonlearnjava}
              alt="Jon"
              onPress = {() => {console.log('onclick')}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jonathan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                trying he's best to understand the concept of Singleton
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Stack direction="row" alignItems="center" spacing={5}>
          <Stack direction="row" spacing={5} alignItems="center">
            <IconButton
              size="large"
              target="_blank"
              component="a"
              href="https://www.linkedin.com/in/jonathanjwubrave/"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              target="_blank"
              component="a"
              href="https://twitter.com/JonathanJiWu"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="secondary"
              target="_blank"
              component="a"
              href="mailto:jonathanwubrave@gmail.com"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              color="primary"
              target="_blank"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <DoNotTouchIcon />
            </IconButton>
          </Stack>
        </Stack>

          </CardActions>
        </Card>
        {/* :sx={{ width: "95%", maxWidth: 1000}} */}
        
      </Container>
    </Container>
  );
}

export default About;
