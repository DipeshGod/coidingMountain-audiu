import { UploadButton } from "@/utils/uploadthing";
import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";

const AudioUploadForm = () => {
  const [fileTitle, setFileTitle] = useState<any>();
  const [uploadedFileUrl, setUploadedFileUrl] = useState<any>();

  const handleSubmit = () => {
    console.log("uploadedFileUrl", uploadedFileUrl);
    console.log("fileTitle", fileTitle);
  };

  return (
    <Container>
      <Box marginTop="2rem" sx={{ width: { xs: "100%", md: "40%" } }}>
        <TextField
          label="Give title or name to your audio"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setFileTitle(e.target.value)}
        />
        <Box width="145px" marginTop="1rem">
          <UploadButton
            endpoint="audioUploader"
            onClientUploadComplete={(res) => {
              setUploadedFileUrl(res[0].url);
            }}
            onUploadError={(error: Error) => {
              console.log("error");
            }}
          />
        </Box>
        <Button
          sx={{ marginTop: "1rem" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AudioUploadForm;
