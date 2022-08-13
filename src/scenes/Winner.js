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
        this.load.image('inicio', './src/sprites/images/Inicio.ng')
        this.load.image('jogarNovamente', './src/sprites/images/JogarNovamente.png')
        this.load.image('winner','../src/sprites/images/Winner.png')
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10).setAlpha(0.5);

        // ======= Botão de sair =======
        const quitButtom = this.add.image(width/2, height/2 - 70, 'inicio').setScale(0.2).setInteractive();
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
            this.scene.start('start');
            this.scene.stop('game' + level);
        });

        // ======= Botão para jogar novamente =======
        const playButtom = this.add.image(width/2, height/2 , 'jogarNovamente').setScale(0.2).setInteractive();
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
            this.scene.stop('game' + level);
            this.scene.start('game' + level);
            this.scene.stop();
        });

        // ======= Winner =======
        this.add.image(width/2, height/2 - 170, 'winner').setScale(0.5);
    }

    update(){

    };
}