"use client";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import UploadNewAudio from "./UploadNewAudio";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

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

          <Typography
            onClick={() => router.push("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            AUDIU
          </Typography>

          <UploadNewAudio />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
