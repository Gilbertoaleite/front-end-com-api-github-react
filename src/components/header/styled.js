/** @format */

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-initial: center;
	padding: 4px;

	input {
		border: 1px solid #ccc;
		border-radius: 8px;
		width: 20%;
		height: 44px;
		padding: 8px;
		font-weight: 500;
		margin-right: 5px;
	}

	button {
		background-color: #225ed8;
		padding: 8px 16px;
		margin: 8px;
		border-radius: 8px;

		&:hover {
			background-color: #2c9040;
			box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
		}

		span {
			font-weight: bold;
			color: #ffff;
			margin-left: 5px;
		}

		
	}
`;
