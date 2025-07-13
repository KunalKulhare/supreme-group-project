"use client";
import { Typography, Box, Grid, Container } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledFooter = styled(Box)`
  background-color: #ffffff;
  padding: 80px 0 40px 0;
  border-top: 1px solid #e0e0e0;
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Container maxWidth="lg">
        <Grid container sx={{ mb: 6 }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/logo.png"
                alt="Supreme Group Logo"
                width={150}
                height={50}
                priority
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={8} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                APPLICATIONS
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Apparel
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Automotive
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Filtration
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Customised Solutions
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                COMPANY
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Innovation
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Global Competency
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                MORE
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Careers
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Terms and Conditions
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                FOLLOW US
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Twitter
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  LinkedIn
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Instagram
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  Medium
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: "1px solid #e0e0e0", pt: 4 }}>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                ©2023. All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: { xs: "center", md: "right" },
                }}
              >
                Supreme house: 110, 16th Road,Chembur, Mumbai - 400071.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
