"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Cell from "./components/cell";

const winningCobos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export default function Home() {
	const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
	const [go, setGo] = useState("Circle");
	const [winningMassage,setwinningMassage] = useState("")
	useEffect(() => {
		winningCobos.forEach((combo) => {
			const circleWins = combo.every((cell) => cells[cell] === "Circle");
			const crossWins = combo.every((cell) => cells[cell] === "Cross");

			if (circleWins) {
				setwinningMassage("Circle Wins ^_^");
			} else if (crossWins) {
				setwinningMassage("Cross Wins ^_^");
			}
		});
	}, [cells,winningMassage]);



		useEffect(() => {
			if (cells.every((cell) => cell !== "") && !winningMassage) {
				setwinningMassage("Draw");
			}
		},[cells,winningMassage])
	return (
		<main className="container">
			<div className="gameboard">
				{cells.map((cell, index) => (
					<Cell
						id={index}
						go={go}
						setGo={setGo}
						key={index}
						cells={cells}
						setCells={setCells}
						cell={cell}
						winningMassage={winningMassage}
					/>
				))}
			</div>
			<div className="winningMassage">{winningMassage}</div>
			{!winningMassage &&<div className="turn" >{`Its Now ${go} Turn!`}</div>}
		</main>
	);
}
