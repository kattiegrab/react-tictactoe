import { expect, test } from 'vitest';
import { createActor } from 'xstate';
import { ticTacToeMachine } from '../machine';

test('tictactoe actor testing', async () => {
	const actor = createActor(ticTacToeMachine);

	actor.start();

	actor.send({ type: 'PLAY', value: 0 });
	actor.send({ type: 'PLAY', value: 5 });
	actor.send({ type: 'PLAY', value: 9 });
	expect(actor.getSnapshot().value).toBe('playing');

	actor.send({ type: 'RESET' });
	expect(actor.getSnapshot().value).toBe('playing');
});

test('test winning', async () => {
	const actor = createActor(ticTacToeMachine);
	actor.start();

	actor.send({ type: 'PLAY', value: 0 });
	actor.send({ type: 'PLAY', value: 1 });
	actor.send({ type: 'PLAY', value: 3 });
	actor.send({ type: 'PLAY', value: 4 });
	actor.send({ type: 'PLAY', value: 6 });

	expect(actor.getSnapshot().value).toEqual({
		gameOver: 'winner',
	});
});

test('test draw', async () => {
	const actor = createActor(ticTacToeMachine);
	actor.start();

	actor.send({ type: 'PLAY', value: 0 });
	actor.send({ type: 'PLAY', value: 4 });
	actor.send({ type: 'PLAY', value: 2 });
	actor.send({ type: 'PLAY', value: 1 });
	actor.send({ type: 'PLAY', value: 7 });
	actor.send({ type: 'PLAY', value: 3 });
	actor.send({ type: 'PLAY', value: 5 });
	actor.send({ type: 'PLAY', value: 8 });
	actor.send({ type: 'PLAY', value: 6 });

	expect(actor.getSnapshot().value).toEqual({
		gameOver: 'draw',
	});
});
