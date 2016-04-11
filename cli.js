#!/usr/bin/env node
'use strict';

const meow = require('meow');
const isPublicDomain = require('is-public-domain');

const cli = meow(`
	Usage
	$ domain <url>

	Example
	$ domain sindresorhus.com
	`);

const input = cli.input[0];

if(!input) {
	console.error('Expecify a url');
	process.exit(1);
}

console.log(isPublicDomain(input));