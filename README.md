# Updating Game State
- Updates to the game state occur through dispatching actions. This allows us to save the game state for rollbacks.

- To add new functionality, create a new class implementing the `GameEvent` interface. It is recommended to put events into the `./src/events/repository` folder
