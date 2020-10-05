import util from 'util';

interface LoggerConfig {
	envKey: string;
	onValue?: string;
	offValue?: string;
}

export const spawnLogger = (config: LoggerConfig) => {
	const logCondition = () =>
		(config.onValue && process.env[config.envKey] && process.env[config.envKey] === config.onValue) ||
		(config.offValue && process.env[config.envKey] && process.env[config.envKey] !== config.offValue);

	const getTrace = () => ((new Error('log').stack!.split('\n')[2] || '…').match(/\(([^)]+)\)/) || [, 'not found'])[1];

	const logger = (data: any, logType: 'log' | 'info' | 'warn' | 'error') => {
		logCondition() && console[logType](util.inspect(`${getTrace()}\n	${data}`, { depth: null }));
	};

	return {
		log: (data: any) => logger(data, 'log'),
		info: (data: any) => logger(data, 'info'),
		warn: (data: any) => logger(data, 'warn'),
		error: (data: any) => logger(data, 'error')
	};
};
