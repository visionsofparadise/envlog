# envlog

A typescript console logger with an environment variable switch.

## Features

- set the environment key and value to match or inverse match.
- optionally prints the line where the logger was called
- smallest possible size and lightest cpu load

## Usage

### install

> npm i envlog

### import spawnLogger

> import spawnLogger from 'envlog'

### spawn a logger

Specify an environment variable to watch and then either an onValue OR offValue to match against.

> const logger = spawnLogger({
> envKey: string, // The key in environment variables to watch eg. 'LOGS' = process.env.LOGS
> onValue: string, // Log when environment value matches this value
> offValue: string, // Log when environment variable does not match this value
> stackTraceLines: number // Number of stack trace lines to show (Optional, default: 1)
> });

### use the logger:

> logger.log('example')
> logger.info(123)
> logger.warn({ key: 'val' })
> logger.error([1, 2, 3])
