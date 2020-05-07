'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('preact/hooks');
var robotHooks = require('robot-hooks');

const useMachine = robotHooks.createUseMachine(hooks.useEffect, hooks.useState);

exports.useMachine = useMachine;
