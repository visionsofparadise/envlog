# envlog

A tiny console logger with an environment variable switch.

### Features

- set the environment key and value to match or inverse match.
- optionally prints the line where the logger was called
- smallest possible size and lightest cpu load (~ 2KB)

### Usage

import spawnLogger:

> import spawnLogger from 'envlog'

spawn a logger:

> const logger = spawnLogger({
> envKey: 'LOG',
> onValue: 'true'
> });

use the logger:

> logger.log('example')
> logger.info(123)
> logger.warn({ key: 'val' })
> logger.error([1, 2, 3])

### Contributing

The package is quite straight forward. I would like to stick to this minimal feature set but am accepting contributions for anything else.

Clone from Github then make a pull request when you are done.
