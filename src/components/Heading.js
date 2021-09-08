import React from "react";

const Heading = ({ text, color, ...rest }) => {
	return (
		<div className="heading-comp">
			<h1
				className={"heading-2 " + (rest.className ? rest.className : "")}
				style={{ color: color === "primary" ? "#458ff6" : color }}
			>
				{text}
			</h1>
			<hr
				style={{
					backgroundColor: color === "primary" ? "#458ff6" : color,
					borderColor: color === "primary" ? "#458ff6" : color,
				}}
			/>
		</div>
	);
}

export default Heading