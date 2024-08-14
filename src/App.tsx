import styled from 'styled-components';
import Board from './components/Board';

const StyledApp = styled.main`
	background: #121212;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		color: white;
		margin: 0;
		padding: 16px;
		text-align: center;
	}
`;

export default function App() {
	return (
		<StyledApp>
			<h1>Tic-Tac-Toe</h1>
			<Board />
		</StyledApp>
	);
}
