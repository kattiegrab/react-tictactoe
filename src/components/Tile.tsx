import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 8vw;
	color: white;
	background-color: #1c1c1c;
	border-radius: 8px;
`;

interface tileProps {
	index: number;
	onClick: () => void;
	player: 'X' | 'O' | null;
}

const Tile: React.FC<tileProps> = ({ index, onClick, player }) => {
	return (
		<StyledTile key={index} onClick={onClick} data-player={player}>
			{player}
		</StyledTile>
	);
};

export default Tile;
