import Phaser from '../lib/phaser.js'

var level;

export default class Pause extends Phaser.Scene {

    constructor() {
        super('pause');
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

        //this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3498db");

        // ======= Botão de sair =======
        const quitButtom = this.add.image(width/2, height/2 - 100, 'quit').setScale(0.2).setInteractive();
        quitButtom.on('pointerover', () => {
            quitButtom.setScale(0.225);
            quitButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        quitButtom.on('pointerout', () => {
            quitButtom.setScale(0.2);
            quitButtom.setTint(0xffffff);
            mouseOver = false;
        });
        quitButtom.on('pointerdown', () => {
            this.scene.stop('game' + level);
            this.scene.start('start');
            this.scene.stop();
        });

        // ======= Botão para retornar ao jogo =======
        const playButtom = this.add.image(width/2, height/2 - 170, 'play').setScale(0.2).setInteractive();
        playButtom.on('pointerover', () => {
            playButtom.setScale(0.225);
            playButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        playButtom.on('pointerout', () => {
            playButtom.setScale(0.2);
            playButtom.setTint(0xffffff);
            mouseOver = false;
        });
        playButtom.on('pointerdown', () => {
            this.scene.resume('game' + level);
            this.scene.stop();
        });
    }

    update(){

    };
}