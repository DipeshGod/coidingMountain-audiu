"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

export default function AudioCard({
  fileName,
  totalNumberOfPlays,
  fileUrl,
  id,
}: any) {
  return (
    <Card
      sx={{
        display: "flex",
        width: { xs: { width: "100%", md: "50%", lg: "30%" } },
        marginTop: "2rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {fileName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {totalNumberOfPlays > 0
              ? `${totalNumberOfPlays} Plays`
              : "No Views Yet"}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Link href={`/audio/${id}?fileUrl=${fileUrl}`}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        src="https://t4.ftcdn.net/jpg/05/54/05/73/360_F_554057378_h4p5AQwS2QE2ZOzPbXKHSnVCuxXfXMx1.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
