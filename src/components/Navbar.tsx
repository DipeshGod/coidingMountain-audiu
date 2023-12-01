import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AUDIU
          </Typography>
          <Box display="flex" alignItems="center">
            <Button
              color="secondary"
              variant="contained"
              sx={{ marginRight: "1rem" }}
            >
              Create New Audiu
            </Button>
            <UserButton afterSignOutUrl="/" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
