"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("../../src/game");
const EventTracker_1 = __importDefault(require("../../src/events/EventTracker"));
const GameStart_1 = __importDefault(require("../../src/events/repository/GameStart"));
describe('Events', () => {
    beforeEach(() => {
        new game_1.Game([]);
    });
    it('should add an event', () => {
        const events = new EventTracker_1.default();
        events.dispatch(new GameStart_1.default());
        expect(events.eventStack.length).toBe(1);
    });
    it('should remove an event', () => {
        const events = new EventTracker_1.default();
        events.dispatch(new GameStart_1.default());
        events.undoLast();
        expect(events.eventStack.length).toBe(0);
    });
    it('should update game state on undo', () => {
        const events = new EventTracker_1.default();
        events.dispatch(new GameStart_1.default());
        expect(game_1.GameContext.game.gameState.gamePhase).toBe(game_1.GamePhase.Started);
        events.undoLast();
        expect(game_1.GameContext.game.gameState.gamePhase).toBe(game_1.GamePhase.Initialized);
        expect(events.gameStates.length).toBe(1);
        expect(events.eventStack.length).toBe(0);
    });
});
