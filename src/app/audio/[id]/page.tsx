"use client";

import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";

const AudioDetailsPlayer = () => {
  const params = useSearchParams();
  const p = useParams();

  const [isGenerateLinkDialogOpen, setIsGenerateLinkDialogOpen] =
    useState(false);
  const [shareTimeStamp, setShareTimeStamp] = useState<any>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(new Audio(params.get("fileUrl")!));

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

  const handleGenerateLinkClick = () => {
    navigator.clipboard.writeText(
      `${window.location.href}&playFrom=${shareTimeStamp}`
    );
    alert("Link copied to clipboard");
    setIsGenerateLinkDialogOpen(false);
  };

  useEffect(() => {
    audioRef.current.currentTime = Number(params.get("playFrom"));
  }, [params]);

  useEffect(() => {
    const increaseAudioPlayStat = async () => {
      await axios.post("/api/audioplays", { id: p.id });
    };

    increaseAudioPlayStat();
  }, [p.id]);

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
          src={`${params.get("fileUrl")}`}
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
              sx={{ width: "50%" }}
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
              sx={{ width: "50%" }}
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.1}
              aria-labelledby="volume-slider"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setIsGenerateLinkDialogOpen(true)}
        >
          Get Link To Share
        </Button>

        <Dialog
          open={isGenerateLinkDialogOpen}
          onClose={() => setIsGenerateLinkDialogOpen(false)}
        >
          <DialogTitle>Generate Link</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Specify The Duration if you want other to listen from
              certain points in the audio.
            </DialogContentText>
            <Stack direction="row" spacing={5} marginTop="1rem">
              <input
                type="range"
                max={audioRef.current.duration}
                value={shareTimeStamp}
                min={0}
                onChange={(e) => setShareTimeStamp(e.target.value)}
              />
              <Typography>Play From: {shareTimeStamp} sec</Typography>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsGenerateLinkDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleGenerateLinkClick}>Generate Link</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AudioDetailsPlayer;
