import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, variant, endIcon, onClick }) => {
	return (
		<Button
			className="button"
			variant={variant}
			sx={{
				borderRadius: "50px",
				display: "flex",
				flexDirection: "row",
				alignItems: "flex-start",
				padding: "7px 30px",
				fontWeight: "600",
				fontSize: "20px",
				fontFamily: '"Exo 2", sans-serif',
				textTransform: "none",
			}}
			endIcon={endIcon}
			onClick={onClick}
		>
			{text}
		</Button>
	);
};
export default CustomButton;
