import { Dispatch, SetStateAction } from "react";

type CellProps = {
	id: number;
	go: string;
	setGo: Dispatch<SetStateAction<string>>;
	cells: string[];
	setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
	winningMassage: string;
};

const Cell = ({ go, setGo, id, cells, setCells,cell,winningMassage }: CellProps) => {
	const hundleClick = (event) => {
		if(winningMassage){
			return
		}
		const notTaken = !cells[id];
		if (notTaken) {
			if (go === "Circle") {
				hundleCellChange("Circle");
				setGo("Cross");
			} else if (go === "Cross") {
				hundleCellChange("Cross");
				setGo("Circle");
			}
		}
	};
	const hundleCellChange = (cellToChange: string) => {
		let copyCells = [...cells];
		copyCells[id] = cellToChange;
		setCells (copyCells);
	};
	return (
		<div className="square" onClick={hundleClick}>
			<div className={cell}>{cell ? (cell === "Circle" ? "O" : "X") : ""}</div>
		</div>
	);
};
export default Cell;
