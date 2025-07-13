"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StickyContainer = styled(Box)`
  position: sticky;
  top: 0;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

const VideoContainer = styled(Box)`
  position: relative;
  width: 100%;
  text-align: center;
`;

const PartButton = styled(Button)`
  min-width: 60px;
  flex-direction: column;
  text-transform: none;
  color: white;
  transition: all 0.3s ease;
`;

const ProgressBar = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: #1976d2;
  z-index: 1200;
`;

const SectionTwo = () => {
  const [vehicle, setVehicle] = useState("passenger");
  const [partIdx, setPartIdx] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  const sectionRef = useRef(null);
  const passengerVidRef = useRef(null);
  const commercialVidRef = useRef(null);
  const lastVehicle = useRef("passenger");
  const playedSections = useRef({ passenger: false, commercial: false });

  const passengerSlides = [
    {
      title: "Complete body",
      video: "/assets/videos/passenger-alpha-trim.mp4",
      poster: "/assets/carpar1.png",
      icon: "/assets/carpar1.png",
    },
    {
      title: "Front",
      video: "/assets/videos/front.mp4",
      poster: "/assets/carpart2.png",
      icon: "/assets/carpart2.png",
    },
    {
      title: "Cabin",
      video: "/assets/videos/Cabin.mp4",
      poster: "/assets/carpart3.png",
      icon: "/assets/carpart3.png",
    },
    {
      title: "Trunk",
      video: "/assets/videos/Trunk.mp4",
      poster: "/assets/carpart4.png",
      icon: "/assets/carpart4.png",
    },
    {
      title: "Exterior",
      video: "/assets/videos/Exterior.mp4",
      poster: "/assets/carpart5.png",
      icon: "/assets/carpart5.png",
    },
  ];

  const commercialSlides = [
    {
      title: "Complete body",
      video: "/assets/videos/commercial-alpha.mp4",
      poster: "/assets/engine.svg",
      icon: "/assets/engine.svg",
    },
    {
      title: "Cabin",
      video: "/assets/videos/commercial-alpha.mp4",
      poster: "/assets/engine2.svg",
      icon: "/assets/engine2.svg",
    },
    {
      title: "Trunk",
      video: "/assets/videos/commercial-alpha.mp4",
      poster: "/assets/engine3.svg",
      icon: "/assets/engine3.svg",
    },
  ];

  const slides = vehicle === "passenger" ? passengerSlides : commercialSlides;

  const togglePlayPause = () => {
    const video =
      vehicle === "passenger"
        ? passengerVidRef.current
        : commercialVidRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => console.error("Play error:", err));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video =
      vehicle === "passenger"
        ? passengerVidRef.current
        : commercialVidRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = video.currentTime / video.duration;
      setVideoProgress(isNaN(progress) ? 0 : progress);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [vehicle, partIdx]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const pct = Math.max(0, Math.min(1, -rect.top / (rect.height - winH)));
      setScrollPct(pct);

      const nextVehicle = pct < 0.7 ? "passenger" : "commercial";

      if (nextVehicle !== lastVehicle.current) {
        setVehicle(nextVehicle);
        lastVehicle.current = nextVehicle;

        const v =
          nextVehicle === "passenger"
            ? passengerVidRef.current
            : commercialVidRef.current;

        if (!playedSections.current[nextVehicle] && v) {
          playedSections.current[nextVehicle] = true;
          playedSections.current[
            nextVehicle === "passenger" ? "commercial" : "passenger"
          ] = false;
          v.currentTime = 0;
          v.play().catch((err) => console.error("Playback error:", err));
          v.onended = () => v.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const v =
      vehicle === "passenger"
        ? passengerVidRef.current
        : commercialVidRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
      v.play().catch((err) => console.error("Autoplay error:", err));
      setIsPlaying(true);
    }
    playedSections.current = { passenger: false, commercial: false };
  }, [partIdx, vehicle]);

  return (
    <Box sx={{ bgcolor: "common.black", color: "common.white" }}>
      <Box ref={sectionRef} sx={{ height: "220vh", position: "relative" }}>
        <StickyContainer>
          <Typography
            variant="h2"
            sx={{
              pt: 4,
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: "100%",
              letterSpacing: "-0.5px",
              "& span": { fontWeight: 600 },
            }}
          >
            Evolving the drive with <span>360-degree</span>
            <br />
            comprehensive solutions
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderLeft: {
                    xs: 0,
                    lg: "2px solid rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                {["passenger", "commercial"].map((type) => (
                  <Button
                    key={type}
                    disableRipple
                    onClick={() => {
                      setVehicle(type);
                      setPartIdx(0);
                      playedSections.current = {
                        passenger: false,
                        commercial: false,
                      };
                      lastVehicle.current = type;
                    }}
                    sx={{
                      display: "block",
                      mb: 6,
                      ml: 2,
                      textTransform: "none",
                      opacity: vehicle === type ? 1 : 0.25,
                      color: "common.white",
                      transition: "opacity 0.4s",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight={600}
                      mb={1}
                      textAlign="center"
                      sx={{ fontSize: "32px" }}
                    >
                      {type === "passenger"
                        ? "Passenger vehicles"
                        : "Commercial vehicles"}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={300}
                      textAlign="center"
                      whiteSpace="pre-line"
                    >
                      {type === "passenger"
                        ? "Revving up innovation\nfrom interior to exterior."
                        : "Advancing engineering\nfor heavy-duty vehicles."}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={8}
              sx={{ position: "relative", textAlign: "center", width: "100%" }}
            >
              <VideoContainer>
                <motion.div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "#111",
                    scale: Math.max(0.35, 1 - scrollPct * 0.8),
                    opacity: 1 - scrollPct,
                    y: -scrollPct * 20,
                    display: vehicle === "passenger" ? "inline-block" : "none",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <video
                    key={`passenger-${partIdx}`}
                    ref={passengerVidRef}
                    src={passengerSlides[partIdx].video}
                    poster={passengerSlides[partIdx].poster}
                    muted
                    playsInline
                    autoPlay
                    preload="auto"
                    controls={false}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      color: "white",
                    }}
                    onError={(e) => console.error("Video error:", e)}
                  />
                </motion.div>

                {(vehicle === "commercial" || scrollPct > 0.5) && (
                  <motion.div
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: `${Math.max(20, (1 - scrollPct) * 400 + 40)}px`,
                      width: "100%",
                      maxWidth: "480px",
                      height: "270px",
                      background: "#1e1e1e",
                      color: "#fff",
                      zIndex: 5,
                      borderRadius: 12,
                      overflow: "hidden",
                      opacity:
                        scrollPct < 0.6
                          ? 0
                          : Math.min(1, (scrollPct - 0.6) / 0.15),
                      transition: "all 0.3s ease-out",
                    }}
                  >
                    <video
                      key={`commercial-${partIdx}`}
                      ref={commercialVidRef}
                      src={commercialSlides[partIdx].video}
                      poster={commercialSlides[partIdx].poster}
                      muted
                      playsInline
                      autoPlay
                      preload="auto"
                      controls={false}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => console.error("Video error:", e)}
                    />
                  </motion.div>
                )}
              </VideoContainer>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
            sx={{ pb: 4, width: "100%" }}
          >
            <Grid
              item
              xs={10}
              md={10}
              lg={10}
              sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
            >
              {slides.map((s, i) => (
                <Grid item key={s.title} sx={{ display: "flex" }}>
                  <PartButton
                    onClick={() => setPartIdx(i)}
                    sx={{
                      minWidth: 60,
                      flexDirection: "column",
                      textTransform: "none",
                      color: "white",
                      transform: partIdx === i ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={s.icon}
                      alt={s.title}
                      style={{
                        width: 60,
                        height: 60,
                        marginBottom: 4,
                        filter: partIdx === i ? "none" : "invert(0.3)",
                        opacity: partIdx === i ? 1 : 0.7,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: partIdx === i ? "white" : "grey.500",
                        fontWeight: partIdx === i ? 600 : 400,
                        textAlign: "center",
                      }}
                    >
                      {s.title}
                    </Typography>
                  </PartButton>
                </Grid>
              ))}
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              lg={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={togglePlayPause}
                sx={{
                  position: "relative",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  padding: 0,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle
                    cx="30"
                    cy="30"
                    r="28"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.2"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="28"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={(1 - videoProgress) * 2 * Math.PI * 28}
                    transform="rotate(-90 30 30)"
                    style={{ transition: "stroke-dashoffset 0.2s linear" }}
                  />
                  {isPlaying ? (
                    <g fill="white">
                      <rect x="24" y="20" width="4" height="20" rx="1" />
                      <rect x="32" y="20" width="4" height="20" rx="1" />
                    </g>
                  ) : (
                    <polygon points="24,20 40,30 24,40" fill="white" />
                  )}
                </svg>
              </Button>
            </Grid>
          </Grid>
        </StickyContainer>
        <ProgressBar sx={{ width: `${scrollPct * 100}%` }} />
      </Box>
    </Box>
  );
};

export default SectionTwo;
