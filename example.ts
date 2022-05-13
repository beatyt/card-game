import Player from '@/player'
import { Game } from './src/index'

const players: Player[] = []

const game = new Game(players)

game.start()
game.end()

console.log(JSON.stringify(game))

game.rollback()

console.log(JSON.stringify(game))
