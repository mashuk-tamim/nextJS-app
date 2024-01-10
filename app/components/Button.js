"use client"
import React from 'react';

const Button = () => {
    return (
		<div>
			<button
				className="bg-green-600 px-4 py-1 rounded-sm"
				onClick={() => console.log("Clicked")}
			>
				Click me
			</button>
		</div>
	);
};

export default Button;