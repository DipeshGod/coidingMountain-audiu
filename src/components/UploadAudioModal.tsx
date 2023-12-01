import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AudioUploadForm from "./AudioUploadForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UploadAudioModal({ open, setOpen }: any) {
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create New Audio
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <AudioUploadForm />
      </Dialog>
    </React.Fragment>
  );
}
