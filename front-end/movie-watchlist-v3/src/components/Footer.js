import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { Link } from "react-router-dom";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            // this is how mui handles routing, import {Link} from react-router-dom and point to link of the component Elegant!
            component={Link}
            to={"/addmovie"}
            label="Add"
            icon={<AddBoxIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to={"/mywatchlist"}
            label="Watchlist"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to={"/top5Movies"}
            label="Trending"
            icon={<WhatshotIcon />}
          />
          <BottomNavigationAction
            // this is how mui handles routing, import {Link} from react-router-dom and point to link of the component Elegant!
            component={Link}
            to={"/about"}
            label="About"
            icon={<InfoIcon />}
          />
          {/* a switch to change dark theme and light theme */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
