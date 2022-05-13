"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("../../src/game/Game"));
const GamePhase_1 = __importDefault(require("../../src/game/GamePhase"));
describe('Game', () => {
    it('should initialize', () => {
        const game = new Game_1.default([]);
        expect(game.gameState.gamePhase).toBe(GamePhase_1.default.Initialized);
    });
    it('should start', () => {
        const game = new Game_1.default([]);
        game.start();
        expect(game.gameState.gamePhase).toBe(GamePhase_1.default.Started);
    });
    it('should end', () => {
        const game = new Game_1.default([]);
        game.start();
        game.end();
        expect(game.gameState.gamePhase).toBe(GamePhase_1.default.Ended);
    });
});
