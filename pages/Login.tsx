import React from 'react'
import { Button } from 'react-bootstrap';
import { Dispatch, SetStateAction } from "react";

// hexes: #142029, #3F7396, #4F8EB5, #77BDDF, #A4E2F9
// TODO Login Header
// shows the logi and name of the website

// main conatiner
// email field (this is a from)
// continue button

interface LoginProps {
	loggedInFunc: Dispatch<SetStateAction<boolean>>;
}

function Logo() {
	return(
		<div 
		style={{background: "#77BDDF", width: "40vw", 
				height: "8vh", margin: "auto", display: "flex",
				alignContent: "center", justifyContent: "center",
				borderRadius: ".5rem"}}
		>
			<h3 style={{margin: "auto", fontWeight: "bolder", fontSize: "3rem"}}> Dophi </h3>
		</div>
	)
}

function LoginPage({loggedInFunc}: LoginProps): JSX.Element {
	return(
		<>
			<div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignContent: "center", margin: "auto"}}>
				<Logo/>
				<Button 
					style={{background: "#4F8EB5"}}
					onClick={()=>loggedInFunc(true)}
					>
					hello there! 
				</Button>
			</div>
		</>
	)
}

export default LoginPage;
