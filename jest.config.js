module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	rootDir: 'src/',
	timers: 'fake',
	setupFilesAfterEnv: ['jest-mock-console/dist/setupTestFramework.js']
};
