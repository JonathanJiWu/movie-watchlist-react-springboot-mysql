import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import * as React from "react";

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
            label="Trending"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="My Watchlist"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction label="Add" icon={<ArchiveIcon />} />
          {/* a switch to change dark theme and light theme */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
