import revalidateHome from "@/app/actions";
import { UploadButton } from "@/utils/uploadthing";
import { useAuth } from "@clerk/nextjs";
import { Box, Button, Container, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AudioUploadForm = ({ setOpen }: any) => {
  const [fileTitle, setFileTitle] = useState<any>("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState<any>("");
  const [isUploading, setIsUploading] = useState(false);
  const auth = useAuth();

  const handleSubmit = async () => {
    try {
      await axios.post("/api/audio", {
        userId: auth.userId,
        uploadedFileUrl,
        fileTitle,
      });
      revalidateHome();
      setOpen(false);
      setUploadedFileUrl("");
      setFileTitle("");
    } catch (err) {
      console.log("err", err);
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
          onChange={(e) => setFileTitle(e.target.value)}
        />
        <Box width="145px" marginTop="1rem">
          <UploadButton
            endpoint="audioUploader"
            onUploadProgress={() => setIsUploading(true)}
            onClientUploadComplete={(res) => {
              setUploadedFileUrl(res[0].url);
              setIsUploading(false);
            }}
            onUploadError={(error: Error) => {
              console.log("error");
            }}
          />
        </Box>
        <Button
          disabled={fileTitle?.length < 5 || uploadedFileUrl?.length < 5}
          sx={{ marginTop: "1rem" }}
          variant="contained"
          onClick={handleSubmit}
        >
          {isUploading ? "Please Wait: File is being uploaded" : "Save"}
        </Button>
      </Box>
    </Container>
  );
};

export default AudioUploadForm;
