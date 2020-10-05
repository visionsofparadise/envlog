import { spawnLogger } from '.';
import mockConsole from 'jest-mock-console';

const onValLogger = spawnLogger({
	envKey: 'LOG',
	onValue: 'true'
});

beforeEach(() => mockConsole(['log', 'info', 'warn', 'error']));

describe('with onValue matching', () => {
	it('calls console log', () => {
		process.env.LOG = 'true';

		onValLogger.log('test');
		expect(global.console.log).toBeCalled();
	});

	it('calls console info', () => {
		process.env.LOG = 'true';

		onValLogger.info('test');
		expect(global.console.info).toBeCalled();
	});

	it('calls console warn', () => {
		process.env.LOG = 'true';

		onValLogger.warn('test');
		expect(global.console.warn).toBeCalled();
	});

	it('calls console error', () => {
		process.env.LOG = 'true';

		onValLogger.error('test');
		expect(global.console.error).toBeCalled();
	});
});

describe('with onValue not matching', () => {
	it('does not call console log', () => {
		process.env.LOG = 'false';

		onValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});

	it('does not call console log', () => {
		process.env.LOG = 'false';

		onValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});

	it('does not call console log', () => {
		process.env.LOG = 'false';

		onValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});

	it('does not call console log', () => {
		process.env.LOG = 'false';

		onValLogger.log('test');
		expect(global.console.log).not.toBeCalled();
	});
});
