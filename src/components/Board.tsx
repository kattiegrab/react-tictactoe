import { useMachine } from '@xstate/react';
import styled from 'styled-components';
import { ticTacToeMachine } from '../machine';
import Tile from './Tile';

const StyledBoard = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	aspect-ratio: 1 / 1;
	grid-gap: 2px;
	padding: 16px;
	width: 100%;
	height: max-content;
	max-width: 600px;
`;

const StyledTopBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	* {
		color: white;
	}

	h2 {
		color: #bb86fc;
	}

	button {
		background-color: #bb86fc;
		color: white;
		padding: 4px 16px;
		font-size: 20px;
		border: none;
		text-transform: uppercase;
		font-weight: 500;
		border-radius: 8px;
	}
`;

function range(start: number, end: number) {
	return Array(end - start)
		.fill(null)
		.map((_, i) => i + start);
}

const Board = () => {
	const [state, send] = useMachine(ticTacToeMachine);

	console.log(state);

	return (
		<>
			{state.matches('gameOver') && (
				<StyledTopBar>
					{state.hasTag('winner') && (
						<h2>Winner: {state.context.winner}</h2>
					)}
					{state.hasTag('draw') && <h2>Draw</h2>}
					<button onClick={() => send({ type: 'RESET' })}>
						Reset
					</button>
				</StyledTopBar>
			)}

			<StyledBoard>
				{range(0, 9).map((index) => {
					return (
						<Tile
							index={index}
							onClick={() => send({ type: 'PLAY', value: index })}
							key={index}
							player={state.context.board[index]}
						/>
					);
				})}
			</StyledBoard>
		</>
	);
};

export default Board;
