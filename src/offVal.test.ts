import { spawnLogger } from '.';
import mockConsole from 'jest-mock-console';

const offValLogger = spawnLogger({
	envKey: 'STAGE',
	offValue: 'prod'
});

beforeEach(() => mockConsole(['log', 'info', 'warn', 'error']));

describe('with offValue matching', () => {
	it('does not call console log', () => {
		process.env.STAGE = 'prod';

		offValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});

	it('does not call console log', () => {
		process.env.STAGE = 'prod';

		offValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});

	it('does not call console log', () => {
		process.env.STAGE = 'prod';

		offValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});

	it('does not call console log', () => {
		process.env.STAGE = 'prod';

		offValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});
});

describe('with offValue not matching', () => {
	it('calls console log', () => {
		process.env.STAGE = 'test';

		offValLogger.log('test');
		expect(global.console.log).toBeCalled();
	});

	it('calls console info', () => {
		process.env.STAGE = 'test';

		offValLogger.info('test');
		expect(global.console.info).toBeCalled();
	});

	it('calls console warn', () => {
		process.env.STAGE = 'test';

		offValLogger.warn('test');
		expect(global.console.warn).toBeCalled();
	});

	it('calls console error', () => {
		process.env.STAGE = 'test';

		offValLogger.error('test');
		expect(global.console.error).toBeCalled();
	});
});
