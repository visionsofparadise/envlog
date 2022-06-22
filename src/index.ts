import util from 'util';

type LogFunction = (message: any) => void;

export interface ILogger {
	warn: LogFunction;
	error: LogFunction;
	info: LogFunction;
	log: LogFunction;
}
interface LoggerConfig {
	envKey: string;
	onValue?: string;
	offValue?: string;
	stackTraceLines?: number;
}

export const spawnLogger = (config: LoggerConfig) => {
	if (config.onValue && config.offValue) throw new Error('Cannot set both onValue and offValue.');
	if (!config.onValue && !config.offValue) throw new Error('onValue or offValue required.');

	const logCondition = () =>
		(config.onValue && process.env[config.envKey] && process.env[config.envKey] === config.onValue) ||
		(config.offValue && process.env[config.envKey] && process.env[config.envKey] !== config.offValue);

	const getPath = (i: number) =>
		((new Error('log').stack!.split('\n')[i] || '…').match(/\(([^)]+)\)/) || [, 'not found'])[1];

	const logger = (data: any, logType: 'log' | 'info' | 'warn' | 'error') => {
		var lines = '';
		const limit = 4 + (config.stackTraceLines || 1);
		for (var i = 4; i < limit; i++) {
			const newLine = getPath(i);

			if (newLine !== 'not found') {
				const linebreak =
					i === limit - 1
						? ''
						: `
`;
				lines = lines + newLine + linebreak;
			}
		}

		if (logCondition()) {
			console[logType](
				`${lines}
${util.inspect(data, { depth: null, compact: false }).toString()}`
			);
		}
	};

	return {
		log: (data: any) => logger(data, 'log'),
		info: (data: any) => logger(data, 'info'),
		warn: (data: any) => logger(data, 'warn'),
		error: (data: any) => logger(data, 'error')
	};
};

export default spawnLogger;
