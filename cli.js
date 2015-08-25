#!/usr/bin/env node
'use strict';
var meow = require('meow');
var isPublicDomain = require('is-public-domain');

var cli = meow({
	help:[
	'Usage',
	'$ domain <url>',
	'Example',
	'$ domain sindresorhus.com',
	]
});

var input = cli.input[0];

if(!input){
	console.error('Expecify a url');
	process.exit(1);
}

console.log(isPublicDomain(input));