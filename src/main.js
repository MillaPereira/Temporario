import Phaser from './lib/phaser.js'

/* importando as cenas */
import Game1 from './scenes/Game1.js'
import Game2 from './scenes/Game2.js'
import Game3 from './scenes/Game3.js'
import Game4 from './scenes/Game4.js'
import Game5 from './scenes/Game5.js'

import Start from './scenes/Start.js'
import Pause from './scenes/Pause.js'
import Info from './scenes/Info.js'
import GameOver from './scenes/GameOver.js'
import Levels from './scenes/Levels.js'
import Winner from './scenes/Winner.js'

new Phaser.Game({
    type: Phaser.AUTO,
    width: 650,
    height: 950,
    scene: [Game1, Game2, Game3, Game4, Game5, Levels, Start, Info,  Pause, GameOver, Winner],
    physics: {
        //default: 'arcade',
        default: 'matter',
        arcade: {
            gravity: {
                y: 1000
            },
            debug: false
        }
    }
})