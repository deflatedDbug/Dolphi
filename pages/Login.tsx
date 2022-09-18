import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import authenticateEmail from "./api/auth";
import logo from "../content/dolphi_logo.png";
import { color } from "@mui/system";

// hexes: #142029, #3F7396, #4F8EB5, #77BDDF, #A4E2F9
// TODO Login Header
// shows the logi and name of the website

// email field (this is a from)
// continue button

interface LoginProps {
  loggedInFunc: Dispatch<SetStateAction<boolean>>;
}

function Logo() {
  return (
    <div
      style={{
        background: "#77BDDF",
        width: "100%",
        height: "5rem",
        margin: "auto",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: ".5rem",
        marginBottom: "1rem",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, .3)",
      }}
    >
      <div
        style={{
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          columnGap: "1rem",
          height: "4rem",
        }}
      >
        <Image src={logo} alt={"Logo"} layout={"responsive"} />
        <h3
          style={{
            margin: "auto",
            fontWeight: "bolder",
            fontSize: "3rem",
            fontFamily: "sans-serif",
            color: "white",
            background: "linear-gradient(to right, #15BCCF 0%, #BF30CF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dolphi
        </h3>
      </div>
    </div>
  );
}

function validateForm(email: string): boolean {
  return email.split(".").find((element) => element === "edu") != undefined;
}

function EmailForm({ loggedInFunc }: LoginProps): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontSize: ".75rem" }}>Email Address</Form.Label>
        <Form.Control
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          <div style={{ fontStyle: "italic" }}>Accepts only .edu addresses</div>
        </Form.Text>
        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{ background: "#4F8EB5", width: "100%" }}
        onClick={(e) => {
          e.preventDefault();
          if (validateForm(email)) loggedInFunc(authenticateEmail());
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

function LoginPage({ loggedInFunc }: LoginProps): JSX.Element {
  return (
    <div
      style={{
        background: "#4F8EB5",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto",
          width: "40vw",
        }}
      >
        <Logo />
        <div
          style={{
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "1rem",
            flexDirection: "column",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, .1)",
          }}
        >
          <h3 style={{ margin: "auto" }}> Welcome </h3>
          <EmailForm loggedInFunc={loggedInFunc} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
