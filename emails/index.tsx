import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface SpotlightstudioProps {
  name: string;
  email: string;
  message: string;
}
const BASEURL = 'https://res-console.cloudinary.com/dwzguysnk/media_explorer_thumbnails/72e2087f96541147d602b8679eb01631/detailed'

const Spotlightstudio = ({
  name,
  email,
  message,
}: SpotlightstudioProps) => (
  <Html>
    <Head />
    <Preview>
      Um estúdio digital que cria sites que não só brilham, mas também performam.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${BASEURL}`}
          width="50"
          height="50"
          alt="LOGO"
          style={logo}
        />
        <Text style={paragraph}> {name} mandou uma nova proposta de {message} de {email}</Text>
        <Text style={paragraph}>
          Um estúdio digital que cria sites que não só brilham, mas também performam.
        </Text>
        <Text style={paragraph}>
          Boa sorte,
          <br />
          Spotlight studio 😊
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Augusta Clementina De Negreiros , Iracema CE, CEP 62980-000
        </Text>
      </Container>
    </Body>
  </Html>
);


export default Spotlightstudio;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
