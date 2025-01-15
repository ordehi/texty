import examine from './examine.js';
import get from './get.js';
import go from './go.js';
import inputFailed from './inputFailed.js';
import inventory from './inventory.js';
import look from './look.js';
import use from './use.js';
import { getPastTense } from '../utils/verbTenses.js';

const actionAliases = {
  get: ['take', 'grab', 'pickup', 'pick'],
  examine: ['look at', 'inspect', 'check'],
  go: ['move', 'walk', 'head', 'travel', 'run', 'sprint', 'jog'],
  use: [
    'u',
    'utilize',
    'activate',
    'operate',
    'open',
    'close',
    'turn',
    'push',
    'pull',
    'flip',
    'press',
    'unlock',
  ],
  inventory: ['inv', 'i', 'items', 'bag', 'backpack', 'pack'],
  look: ['l', 'survey', 'scan', 'see', 'view', 'watch', 'observe'],
};

function withVerbTense(actionFn) {
  return (params, gameState, verb) => {
    const result = actionFn(params, gameState);
    if (result && result.includes('{verb}') && verb) {
      const pastTense = getPastTense(verb);
      return result.replace('{verb}', pastTense);
    }
    return result;
  };
}

const baseActions = {
  examine,
  get,
  go,
  inputFailed,
  inventory,
  look,
  use,
};

const actions = {};
Object.entries(baseActions).forEach(([actionName, fn]) => {
  const wrappedAction = withVerbTense(fn);
  actions[actionName.toLowerCase()] = wrappedAction;

  if (actionAliases[actionName]) {
    actionAliases[actionName].forEach((alias) => {
      actions[alias.toLowerCase()] = wrappedAction;
    });
  }
});

export default actions;
