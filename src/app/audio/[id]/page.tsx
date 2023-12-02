import { Card, CardMedia } from "@mui/material";
import React from "react";

const AudioDetailsPlayer = () => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          sx={{ width: "100%" }}
          src="https://t4.ftcdn.net/jpg/05/54/05/73/360_F_554057378_h4p5AQwS2QE2ZOzPbXKHSnVCuxXfXMx1.jpg"
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default AudioDetailsPlayer;
