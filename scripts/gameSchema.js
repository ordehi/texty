const gameSchema = {
  type: 'object',
  required: [
    'game',
    'locations',
    'interactables',
    'startingLocation',
    'initialMessage',
  ],
  properties: {
    game: {
      type: 'string',
      description: 'The title of the game',
    },
    locations: {
      type: 'object',
      patternProperties: {
        '.*': {
          type: 'object',
          required: ['description', 'exits', 'interactables'],
          properties: {
            description: {
              type: 'string',
              description: 'Description of the location',
            },
            exits: {
              type: 'object',
              patternProperties: {
                '.*': {
                  type: 'string',
                  description: 'Direction mapped to destination location name',
                },
              },
            },
            interactables: {
              type: 'array',
              items: {
                type: 'string',
                description: 'Names of interactable items in this location',
              },
            },
          },
        },
      },
    },
    interactables: {
      type: 'object',
      patternProperties: {
        '.*': {
          type: 'object',
          required: ['textResponse'],
          properties: {
            textResponse: {
              type: 'string',
              description: 'Description when examining the item',
            },
            actionResponse: {
              type: 'string',
              description: 'Optional response when using the item',
            },
          },
        },
      },
    },
    startingLocation: {
      type: 'string',
      description: 'Name of the location where the player starts',
    },
    initialMessage: {
      type: 'string',
      description: 'Message shown when the game starts',
    },
  },
};
