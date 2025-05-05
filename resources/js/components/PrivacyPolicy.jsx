import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from "@mui/material";
import privacypolicy from "../assets/images/privacypolicy.jpg";

const animatedLinkStyle = {
  fontFamily: 'Candara',
  position: "relative",
  display: "inline-block",
  color: "#000",
  textDecoration: "none",
  transition: "color 0.3s ease",
  "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "0.125rem",
      left: 0,
      bottom: 0,
      backgroundColor: "#ffeb3b",
      transition: "width 0.3s ease"
  },
  "&:hover": {
      color: "#1e8c42",
      "&::after": {
          width: "100%"
      }
  }
};

export const PrivacyPolicy = () => {
  return (
    <>
    <div className="container-fluid" style={{fontFamily:'Candara'}}>
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-10">
          <img
            src={privacypolicy}
            alt="main wallpaper"
            className="img-fluid rounded w-100"
            style={{ maxHeight: "17rem", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 text-start">
          <h2 className="mb-3">Privacy Policy for www.gharaya.com</h2>
          <p>
            Welcome to www.gharaya.com <b>(Brand of Desimati Agri Technologies & Services Pvt Ltd)</b>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h3 className="mt-4">Information We Collect</h3>

          <h4 className="mt-3">1. Personal Information</h4>
          <p>
            We may collect personal information such as your name, email address, phone number, and any other information you provide when you register on the Site, subscribe to our newsletter, or contact us.
          </p>

          <h4 className="mt-3">2. Non-Personal Information</h4>
          <p>
            We may collect non-personal information such as your IP address, browser type, device type, and information about your visit to the Site, including the pages you view and the links you click.
          </p>

          <h4 className="mt-3">3. Cookies and Tracking Technologies</h4>
          <p>
            We may use cookies and similar tracking technologies to collect information about your interaction with the Site. You can choose to disable cookies through your browser settings.
          </p>

          <h3 className="mt-4">4. How We Use Your Information</h3>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>To operate and maintain the Site</li>
            <li>To improve our website and services</li>
            <li>To personalize your experience on the Site</li>
            <li>To communicate with you, including sending newsletters or updates</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>

          <h3 className="mt-4">5. How We Share Your Information</h3>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li>With Service Providers: We may share information with third-party vendors, service providers, or contractors who perform services on our behalf.</li>
            <li>For Legal Reasons: We may disclose information if required by law or in response to valid requests by public authorities.</li>
            <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, or acquisition.</li>
          </ul>

          <h3 className="mt-4">6. Security of Your Information</h3>
          <p>
            We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
          </p>

          <h3 className="mt-4">7. Third-Party Websites</h3>
          <p>
            Our Site may contain links to third-party websites. This Privacy Policy does not apply to those sites. We encourage you to read their privacy policies.
          </p>

          <h3 className="mt-4">8. Your Privacy Rights</h3>
          <p>
            Depending on your location, you may have rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information below.
          </p>

          <h3 className="mt-4">9. Children's Privacy</h3>
          <p>
            Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from them. If we learn we have, we will delete it.
          </p>

          <h3 className="mt-4">10. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of changes by posting the new version on this page.
          </p>

          <h3 className="mt-4">11. Contact Us</h3>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <Grid item><Link href="mailto:ashish@desimati.com" underline="hover" color="#fff" sx={animatedLinkStyle}><b>ashish@desimati.com</b></Link><br /></Grid>
        </div>
      </div>
    </div>
    </> 
  );
};



