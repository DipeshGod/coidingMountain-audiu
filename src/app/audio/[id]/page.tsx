"use client";

import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";

const AudioDetailsPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(
    new Audio(
      "https://utfs.io/f/b28ae5ac-f182-48d4-bd17-5a7c7dba0293-tkp2u1.mp3"
    )
  );

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: any, newValue: any) => {
    setVolume(newValue);
    audioRef.current.volume = newValue;
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (event: any, newValue: any) => {
    setCurrentTime(newValue);
    audioRef.current.currentTime = newValue;
  };

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

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
      <div>
        <audio
          ref={audioRef}
          src={
            "https://utfs.io/f/b28ae5ac-f182-48d4-bd17-5a7c7dba0293-tkp2u1.mp3"
          }
          onTimeUpdate={updateTime}
          onEnded={() => setIsPlaying(false)}
        ></audio>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={handlePlayPause}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Grid>
          <Grid item xs>
            <Slider
              sx={{ width: "100px" }}
              value={currentTime}
              onChange={handleSeek}
              max={audioRef.current.duration || 0}
              aria-labelledby="audio-slider"
            />
          </Grid>
          <Grid item>
            <Typography variant="body2">{formatTime(currentTime)}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <VolumeUp />
          </Grid>
          <Grid item xs>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.1}
              aria-labelledby="volume-slider"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AudioDetailsPlayer;
