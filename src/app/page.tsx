import AudioCard from "@/components/AudioCard";
import prisma from "@/lib/prisma";
import { Box, Typography } from "@mui/material";

export default async function Home() {
  const data = await prisma.audioUploads.findMany();

  return (
    <main>
      <Typography variant="h3" fontSize="2rem" marginBottom="1rem">
        See Most Listened
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {data.map((item) => {
          return <AudioCard key={item.id} fileName={item.fileName} />;
        })}
      </Box>
    </main>
  );
}
