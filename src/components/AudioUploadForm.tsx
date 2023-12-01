import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";

const AudioUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("audio/")) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      console.log("Please select an audio file.");
    }
  };

  return (
    <Container>
      <Box marginTop="2rem" sx={{ width: { xs: "100%", md: "40%" } }}>
        <TextField
          label="Give title or name to your audio"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          type="file"
          InputProps={{
            inputProps: {
              accept: "audio/*",
            },
            onChange: handleFileChange,
          }}
        />
        <Button
          disabled={isSaveDisabled}
          sx={{ marginTop: "1rem" }}
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AudioUploadForm;
