"use client";

import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledSection = styled(Box)`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const VideoBackground = styled("video")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; /* Base layer for video */
`;

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Solid black with 60% opacity */
  z-index: 1; /* Above video, below content */
`;

const ContentContainer = styled(Box)`
  position: relative;
  z-index: 2; /* On top of overlay and video */
  color: white;
  max-width: 1000px;
  padding: 0 20px;
`;

const SectionOne = () => {
  return (
    <StyledSection className="section-one">
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/assets/videos/automotive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <ContentContainer>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 2,
            fontSize: "16px",
            fontWeight: "normal",
            opacity: 0.9,
            letterSpacing: "0.5px",
          }}
        >
          Driven by performance
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Soft trims and{" "}
          <Typography
            component="span"
            variant="h2"
            sx={{
              color: "#00bcd4",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            NVH solutions
          </Typography>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
          }}
        >
          for seamless rides
        </Typography>
      </ContentContainer>
    </StyledSection>
  );
};

export default SectionOne;
