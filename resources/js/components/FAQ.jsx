import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import main_image from "../assets/images/main_image.jpg";

const faqs = [
  {
    question: "What is Gharaya?",
    answer:
      "Gharaya is an agritech platform that connects consumers directly with local farmers to deliver fresh fruits and vegetables.",
  },
  {
    question: "How to place an order?",
    answer:
      "You can place an order through our website or mobile app. Just browse the products, add them to your cart, and proceed to checkout.",
  },
  {
    question: "What are the delivery charges?",
    answer:
      "Delivery charges depend on your location and order value. Details are available at the checkout page.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit/debit cards, UPI, net banking, and cash on delivery.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, you can track your order through our website or app using your order ID.",
  },
];

const FAQ = () => {
  return (
    <Box>
      {/* <Header/> */}
      <Box
        component="img"
        src={main_image}
        alt="Fruits Puzzle Image"
        sx={{
          width: "100%",
          height: 400,
          objectFit: "cover",
        }}
      />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions (FAQ)
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion key={index} defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight="bold">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      {/* <Footer/> */}
    </Box>
  );
};

export default FAQ;