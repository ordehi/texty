# Texty - A Text Adventure Game Engine

A simple text adventure game engine that lets you play JSON-based games and create your own adventures.

## Playing Games

1. Click "Manage Games" to open the game selection menu
2. Either:
   - Select a game from the dropdown and click "Load"
   - Upload your own game JSON file
3. Use text commands to play:
   - `look` - Look around the current location
   - `examine [item]` - Look at a specific item
   - `get [item]` - Pick up an item
   - `inventory` - Check your inventory
   - `use [item]` - Use an item from your inventory
   - `go [direction]` - Move in a direction (north, south, east, west)

## Creating Games

Games are defined in JSON files stored in the [games/](games/) directory. Add your game file to [scripts/config.js](scripts/config.js) to make it appear in the game selection menu.

### Game Schema

```json
{
  "type": "object",
  "required": [
    "game",
    "locations",
    "interactables",
    "startingLocation",
    "initialMessage"
  ],
  "properties": {
    "game": {
      "type": "string",
      "description": "The title of the game"
    },
    "locations": {
      "type": "object",
      "patternProperties": {
        ".*": {
          "type": "object",
          "required": ["description", "exits", "interactables"],
          "properties": {
            "description": {
              "type": "string",
              "description": "Description of the location"
            },
            "exits": {
              "type": "object",
              "patternProperties": {
                ".*": {
                  "type": "string",
                  "description": "Direction mapped to destination location name"
                }
              }
            },
            "interactables": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "Names of interactable items in this location"
              }
            }
          }
        }
      }
    },
    "interactables": {
      "type": "object",
      "patternProperties": {
        ".*": {
          "type": "object",
          "required": ["textResponse"],
          "properties": {
            "textResponse": {
              "type": "string",
              "description": "Description when examining the item"
            },
            "actionResponse": {
              "type": "string",
              "description": "Optional response when using the item"
            }
          }
        }
      }
    },
    "startingLocation": {
      "type": "string",
      "description": "Name of the location where the player starts"
    },
    "initialMessage": {
      "type": "string",
      "description": "Message shown when the game starts"
    }
  }
}
```
