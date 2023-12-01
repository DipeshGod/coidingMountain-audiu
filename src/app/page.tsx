import AudioCard from "@/components/AudioCard";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Typography variant="h3" fontSize="2rem" marginBottom="1rem">
        See Most Listened
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
      </Box>
    </main>
  );
}
