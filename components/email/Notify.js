import React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import { Heading } from "@react-email/heading";
import Link from "next/link";

async function NotifyEmail(props) {
  const main = {
    backgroundColor: "#ffffff",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#333333", // Default text color
  };

  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "600px",
    width: "100%",
  };

  const logo = {
    margin: "0 auto",
    display: "block",
    maxWidth: "170px",
    width: "100%",
  };

  const heading = {
    color: "#3b3b3b", // Dark gray color for heading
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "1.4",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "20px",
    backgroundImage: "linear-gradient(to right, #FF7E5F, #feb47b)", // Gradient color
    color: "transparent",
    backgroundClip: "text", // Gradient effect on text
    "@media(maxWidth: 600px)": {
      fontSize: "1.25rem", // Smaller font size for mobile
    },
  };

  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    textAlign: "justify",
    color: "#666666", // Light gray color for text
    "@media(maxWidth: 600px)": {
      fontSize: "14px", // Smaller font size for mobile
      lineHeight: "22px", // Adjust line height for mobile
    },
  };

  const hr = {
    borderColor: "#FF7E5F", // Gradient color for the horizontal line
    borderWidth: "1px",
    margin: "20px 0",
  };

  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    textAlign: "center",
    "@media(maxWidth: 600px)": {
      fontSize: "10px", // Adjust footer font size for mobile
    },
  };

  return (
    <Html>
      <Head />
      <Preview>New Waitlist Request Notification</Preview>
      <Body style={main}>
        <Container style={container}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Link href="/">
              <Img
                src="https://www.streamlinebio.ai/images/mainl.png"
                alt="Logo"
                style={logo}
              />
            </Link>
          </div>
          <Heading as="h2" style={heading}>
            New Waitlist Request
          </Heading>

          <Text style={paragraph}>Hello StreamLine Team,</Text>
          <Text style={paragraph}>
            We have received a new request to join the waitlist.
          </Text>
          <Text style={paragraph}>
            <b>First Name:</b> {props.firstName}
            <br />
            <b>Last Name:</b> {props.lastName}
            <br />
            <b>Company Name:</b> {props.companyName}
            <br />
            <b>Email:</b> {props.email}
          </Text>
          <Text style={paragraph}>
            Please reach out to this company if needed, or keep them updated as
            the product progresses.
          </Text>

          <Hr style={hr} />
          <div style={{textAlign:"center"}}>
            <Text style={footer}>
              Streamlining CGT manufacturing for all clinical stages through
              AI-driven automation
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}

export default NotifyEmail;
