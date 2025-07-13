"use client";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledAppBar = styled(AppBar)`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 1;
`;

const ContactButton = styled(Button)`
  background: linear-gradient(135deg, #00bcd4 0%, #4dd0e1 100%);
  color: white;
  text-transform: none;
  padding: 10px 28px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 3px 10px rgba(0, 188, 212, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0097a7 0%, #00bcd4 100%);
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
  }

  @media (max-width: 600px) {
    padding: 8px 20px;
    font-size: 12px;
  }
`;

const LanguageButton = styled(Button)`
  min-width: 50px;
  padding: 8px 12px;
  margin-left: 16px;
  border-radius: 20px;
  background-color: #f5f5f5;
  color: #333;
  font-weight: 600;
  font-size: 12px;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    margin-left: 8px;
    padding: 6px 10px;
    font-size: 11px;
  }
`;

const LinkedInIcon = styled(Box)`
  width: 32px;
  height: 32px;
  background-color: #0077b5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-left: 12px;
  cursor: pointer;

  &:hover {
    background-color: #005582;
  }

  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
    margin-left: 8px;
  }
`;

const MobileMenu = styled(Drawer)`
  .MuiDrawer-paper {
    width: 250px;
    padding: 20px;
  }
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ padding: "20px" }}>
      <List>
        <ListItem button>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="LinkedIn" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Language: ENG" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="fixed" className="header">
      <Toolbar sx={{ 
        padding: { xs: "0 16px", sm: "0 24px", md: "0 40px" }, 
        height: { xs: "56px", sm: "64px", md: "70px" }
      }}>
        <LogoContainer>
          <Image
            src="/assets/logoimg.png"
            alt="Supreme Group Logo"
            width={120}
            height={45}
            priority
            style={{ 
              cursor: "pointer",
              width: { xs: "100px", sm: "120px" },
              height: "auto"
            }}
          />
        </LogoContainer>

        <Box sx={{ 
          display: { xs: "none", sm: "flex" }, 
          alignItems: "center" 
        }}>
          <ContactButton>Contact Us</ContactButton>
          <LinkedInIcon>in</LinkedInIcon>
          <LanguageButton>🌐 ENG</LanguageButton>
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ 
            display: { xs: "flex", sm: "none" },
            color: "#333"
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <MobileMenu
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawerContent}
      </MobileMenu>
    </StyledAppBar>
  );
};

export default Header;