import Phaser from '../lib/phaser.js'

var level;

export default class Winner extends Phaser.Scene {

    constructor() {
        super('winner');
    }

    init(data){
        level = data;
    };

    preload() {
        this.load.image('quit', './src/sprites/images/Quit.png')
        this.load.image('play', './src/sprites/images/Play.png')
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10).setAlpha(0.5);

        // ======= Botão de sair =======
        const quitButtom = this.add.image(width/2, height/2 - 100, 'quit').setScale(0.2).setInteractive();
        quitButtom.on('pointerover', () => {
            quitButtom.setScale(0.225);
            quitButtom.setTint(0x00FF00)
            mouseOver = true;
        });
        quitButtom.on('pointerout', () => {
            quitButtom.setScale(0.2);
            quitButtom.setTint(0xffffff);
            mouseOver = false;
        });
        quitButtom.on('pointerdown', () => {
            this.scene.start('levels');
            this.scene.stop('game' + level);
        });

        // ======= Botão para returnar ao jogo =======
        const playButtom = this.add.image(width/2, height/2 - 150, 'play').setScale(0.2).setInteractive();
        playButtom.on('pointerover', () => {
            playButtom.setScale(0.225);
            playButtom.setTint(0x00FF00)
            mouseOver = true;
        });
        playButtom.on('pointerout', () => {
            playButtom.setScale(0.2);
            playButtom.setTint(0xffffff);
            mouseOver = false;
        });
        playButtom.on('pointerdown', () => {
            this.scene.resume('game1');
            this.scene.stop();
        });
    }

    update(){

    };
}