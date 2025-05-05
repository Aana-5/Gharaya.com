import * as React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from 'react-router-dom';
import gharayalogo2 from "../../assets/images/gharayalogo2-removebg-preview.png";
import applelogo from "../../assets/images/applelogo.png";
import playstorelogo from "../../assets/images/playstorelogo.png";

const Footer = () => {


    const theme = useTheme();
    // Hover Icons Animation
    const socialIconStyles = {
        color: "#fff",
        fontSize: 28,
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.2)",
            color: "#fff"
        }
    };

    //   Hover Links Animation
    const animatedLinkStyle = {
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        display: "inline-block",
        color: "#fff",
        textDecoration: "none",
        transition: "color 0.3s ease",
        "&::after": {
            content: '""',
            position: "absolute",
            width: "0%",
            height: "0.125rem",
            left: 0,
            bottom: 0,
            backgroundColor: "#fff",
            transition: "width 0.3s ease"
        },
        "&:hover": {
            color: "#ffeb3b",
            "&::after": {
                width: "100%"
            }
        }
    };


    return (<>
        {/* <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", }}>
            </Box>
        // <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", }}> */}
            <Box
                sx={{
                    position: "relative",
                    color: "#fff",
                    p: 4,
                    mt: "3rem",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#26a649",
                        backgroundImage: "linear-gradient(327deg,#1e8c42 0%, #0b7c3c 74%)",
                        borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                        transform: "scaleX(1.5)",
                        zIndex: 0,
                    },
                    [theme.breakpoints.down("sm")]: {
                        "&::before": {
                            borderRadius: "100% 100% 0 0 / 40% 40% 0 0",
                            transform: "scaleX(1.4)",
                        }
                    },
                    "& > *": {
                        position: "relative",
                        zIndex: 1,
                    }
                }}
            >
                <Grid container spacing={4} maxWidth="lg" margin="auto">
                    {/* Logo & Description */}
                    <Grid item xs={12} md={3}>
                        <img
                            src={gharayalogo2}
                            alt="Gharaya.com logo"
                            style={{
                                width: "12.5rem",
                                height: "auto",
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        />
                        <Typography variant="body2" sx={{ mb: 2 }} color="#fff">
                            Your trusted source for fresh, farm-to-home products.
                        </Typography>
                        <Box>
                            <IconButton
                                href="https://www.facebook.com/desimatijabalpur/"
                                target="_blank"
                                aria-label="Facebook"
                                size="large"
                                sx={socialIconStyles}
                            >
                                <FacebookIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton
                                href="#"
                                aria-label="Instagram"
                                size="large"
                                sx={socialIconStyles}
                            >
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton
                                href="#"
                                aria-label="LinkedIn"
                                size="large"
                                sx={socialIconStyles}
                            >
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                        <a
                            href="https://play.google.com/store/apps/details?id=co.median.android.kpeknb&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={playstorelogo}
                                alt="Download on Play Store"
                                style={{
                                    width: "auto",
                                    height: "3.125rem",
                                    transition: "all 0.3s ease-in-out",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            />
                        </a>
                        <a
                            href="https://apps.apple.com/in/app/gharaya/id6739162919"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={applelogo}
                                alt="Download on App Store"
                                style={{
                                    width: "auto",
                                    height: "3.125rem",
                                    transition: "all 0.3s ease-in-out",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            />
                        </a>
                    </Grid>

                    {/* Useful Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            color="#fff"
                            sx={{
                                fontSize: "1.3rem",
                                fontFamily: "'Poppins', sans-serif",
                                textTransform: "uppercase"
                            }}
                        >
                            Menu
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Grid item><Link component={RouterLink} to="/" underline="hover" color="#fff" sx={animatedLinkStyle}>Home</Link></Grid>
                            <Grid item><Link component={RouterLink} to="/about" underline="hover" color="#fff" sx={animatedLinkStyle}>About Us</Link></Grid>
                            <Grid item>
                                <Link
                                    component={RouterLink}
                                    to="/contact"
                                    underline="hover"
                                    color="#fff"
                                    sx={animatedLinkStyle}
                                >
                                    Contact Us
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    component={RouterLink}
                                    to="/faq"
                                    underline="hover"
                                    color="#fff"
                                    sx={animatedLinkStyle}
                                >
                                    FAQs
                                </Link>
                            </Grid>
                        </Box>
                    </Grid>

                    {/* Customer Services */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            color="#fff"
                            sx={{
                                fontSize: "1.3rem",
                                fontFamily: "'Poppins', sans-serif",
                                textTransform: "uppercase"
                            }}
                        >
                            Customer Services
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Grid item>
                                <Link
                                    component={RouterLink}
                                    to="/faq"
                                    underline="hover"
                                    color="#fff"
                                    sx={animatedLinkStyle}
                                >
                                    FAQs
                                </Link>
                            </Grid>
                            <Grid item><Link component={RouterLink} to="/terms&conditions" underline="hover" color="#fff" sx={animatedLinkStyle}>Terms & Conditions</Link></Grid>
                            <Grid item><Link component={RouterLink} to="/privacypolicy" underline="hover" color="#fff" sx={animatedLinkStyle}>Privacy Policy</Link></Grid>
                            <Grid item><Link component={RouterLink} to="/refund" underline="hover" color="#fff" sx={animatedLinkStyle}>Refund Policy</Link></Grid>
                        </Box>
                    </Grid>

                    {/* Contact Us */}
                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            color="#fff"
                            sx={{
                                fontSize: "1.3rem",
                                fontFamily: "'Poppins', sans-serif",
                                textTransform: "uppercase"
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="#fff">
                            <Grid item><Link href="mailto:admin@desimati.com" underline="hover" color="#fff" sx={animatedLinkStyle}><b>admin@desimati.com</b></Link><br /></Grid>
                            <Grid item><Link href="tel:+916261497479" underline="hover" color="#fff" sx={animatedLinkStyle}><b>+91 - 6261497479</b></Link></Grid>
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bottom Text */}
                <Box textAlign="center" pt={2} mt={2} borderTop="0.063rem solid #ddd">
                    <Typography variant="body2" color="#fff">
                        © {new Date().getFullYear()} Gharaya. All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        {/* // </Box> */}
        </>
    );
};

export default Footer;
