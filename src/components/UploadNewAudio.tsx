"use client";

import UploadAudioModal from "@/components/UploadAudioModal";
import { UserButton } from "@clerk/nextjs";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const UploadNewAudio = () => {
  const [openAddNewAudio, setOpenAddNewAudio] = useState(false);

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Button
          color="secondary"
          variant="contained"
          sx={{ marginRight: "1rem" }}
          onClick={() => setOpenAddNewAudio(true)}
        >
          Create New Audio
        </Button>
        <UserButton afterSignOutUrl="/" />
      </Box>
      <UploadAudioModal open={openAddNewAudio} setOpen={setOpenAddNewAudio} />
    </div>
  );
};

export default UploadNewAudio;
