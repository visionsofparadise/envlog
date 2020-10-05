import { spawnLogger } from '.';

const logger = spawnLogger({
	envKey: 'LOG',
	onValue: 'true'
});

process.env.LOG = 'true';

it('prints various objects from the logger', () => {
	logger.log('string');

	logger.log(123);

	logger.log({
		test: {
			test: {
				test: {
					test: {
						test: {
							test: {
								test: true
							}
						}
					}
				}
			}
		}
	});

	logger.log(['array']);

	expect(true).toBeTruthy();
});
