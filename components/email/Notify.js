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
    fontFamily: "ABC Diatype, Arial, Helvetica, sans-serif",
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

  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    textAlign: "justify",
    "@media(maxWidth: 600px))": {
      fontSize: "14px",
      lineHeight: "22px",
    },
  };

  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };

  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    textAlign: "center",
    "@media(maxWidth: 600px)": {
      fontSize: "10px",
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
                src="http://localhost:3000/images/mainl.png"
                alt="Logo"
                style={logo}
              />
            </Link>
          </div>
          <Heading
            as="h2"
            style={{
              color: "black",
              fontFamily: "Arial, sans-serif",
              textAlign: "center",
              fontSize: "1.5rem",
              "@media(maxWidth: 600px)": { fontSize: "1.25rem" }, 
            }}
          >
            New Waitlist Request
          </Heading>

          <Text style={paragraph}>Hello StreamLine Team,</Text>
          <Text style={paragraph}>
            We have received a new request to join the waitlist.
          </Text>
          <Text style={paragraph}>
            <b>Company Name:</b> {props.companyName}
            <br />
            <b>Email:</b> {props.email}
          </Text>
          <Text style={paragraph}>
            Please reach out to this company if needed, or keep them updated as
            the product progresses.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            Streamlining CGT manufacturing for all clinical stages through
            AI-driven automation
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default NotifyEmail;
