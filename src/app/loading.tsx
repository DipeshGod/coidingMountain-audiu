import React from "react";
import { CircularProgress, Container, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <CircularProgress color="primary" size={80} />
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Loading...
        </Typography>
      </div>
    </Container>
  );
};

export default Loading;
