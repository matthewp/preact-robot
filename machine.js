import { useMemo, useState } from 'preact/hooks';
import { createUseMachine } from 'robot-hooks';

export const useMachine = createUseMachine(useMemo, useState);