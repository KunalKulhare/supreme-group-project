"use client";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

const StyledContact = styled(Box)`
  background-color: #1976d2;
  padding: 80px 40px;
  color: #ffffff;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactForm = () => {
  return (
    <StyledContact className="contact-form">
      <Grid container spacing={8} maxWidth="1200px">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h3"
              sx={{
                mb: 1,
                fontWeight: "300",
                fontSize: "2.5rem",
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              Get in touch
            </Typography>
            <Box
              sx={{
                width: "50px",
                height: "2px",
                backgroundColor: "#ffffff",
                mb: 3,
                mt: 1,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                mb: 5,
                opacity: 0.9,
                fontSize: "1rem",
                fontWeight: "300",
                textAlign: "left",
              }}
            >
              For general enquiries
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  fontWeight: "500",
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                Address :
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.9,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                110, 16th Road, Chembur, Mumbai - 400071
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  fontWeight: "500",
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                Phone :
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.9,
                  fontSize: "1rem",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                +91 22 25208022
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  fontWeight: "500",
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                Email :
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.9,
                  fontSize: "1rem",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                info@supremegroup.co.in
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <TextField
              placeholder="Full name"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  "& fieldset": {
                    border: "none",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                  "&:hover fieldset": {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                  },
                  "&.Mui-focused fieldset": {
                    borderBottom: "2px solid #ffffff",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "16px 0",
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: "300",
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.8)",
                    opacity: 1,
                  },
                },
              }}
            />

            <TextField
              placeholder="E-mail"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  "& fieldset": {
                    border: "none",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                  "&:hover fieldset": {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                  },
                  "&.Mui-focused fieldset": {
                    borderBottom: "2px solid #ffffff",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "16px 0",
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: "300",
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.8)",
                    opacity: 1,
                  },
                },
              }}
            />

            <TextField
              placeholder="Subject"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  "& fieldset": {
                    border: "none",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                  "&:hover fieldset": {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                  },
                  "&.Mui-focused fieldset": {
                    borderBottom: "2px solid #ffffff",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "16px 0",
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: "300",
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.8)",
                    opacity: 1,
                  },
                },
              }}
            />

            <TextField
              placeholder="Message"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  "& fieldset": {
                    border: "none",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                  "&:hover fieldset": {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                  },
                  "&.Mui-focused fieldset": {
                    borderBottom: "2px solid #ffffff",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "16px 0",
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: "300",
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.8)",
                    opacity: 1,
                  },
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#ffffff",
                color: "#1976d2",
                borderRadius: "30px",
                padding: "10px 40px",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "1.1rem",
                alignSelf: "flex-start",
                minWidth: "120px",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
                "&:hover": {
                  backgroundColor: "#f8f9fa",
                  boxShadow: "0 6px 16px rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </StyledContact>
  );
};

export default ContactForm;
