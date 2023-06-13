# Updating Game State
- Updates to the game state occur through dispatching actions. This allows us to save the game state for rollbacks.

- To add new functionality, create a new class implementing the `GameEvent` interface. It is recommended to put events into the `./src/events/repository` folder

---
# Layout
`/actions` - Stuff clients call
`/api` - Events and some public stuff. Will be changing the name in the future
`/game` - Entities that change the game state
`/state` - Functions for modifying state
`/types` 

# Rounds, Phases, Turns
- Call Phase Progression . progress
- Player's holding/ready - managed by client

# Adding new functionality
- Action for client to call
- Event to notify client on resolution
- Entity to perform state modification, called by action. See `/game` folder
