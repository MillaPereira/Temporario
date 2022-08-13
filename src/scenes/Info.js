import Phaser from '../lib/phaser.js'

export default class Info extends Phaser.Scene {

    constructor() {
        super('info');
    }

    init(){};

    preload() {
        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('quit', './src/sprites/images/Quit.png');
        this.load.image('info', './src/sprites/images/InfoBox.png')
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10);
        
        // ======= Botão de sair =======
        const quitButtom = this.add.image(110,40, 'quit').setScale(0.2).setInteractive();
        quitButtom.on('pointerover', () => {
            quitButtom.setScale(0.22);
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
        });

        setInterval(()=>{

            if(mouseOver === false){
                if(playButtom.scale == (0.4)) playButtom.setScale(0.35);
                else playButtom.setScale(0.4);
            }

        },500);

        const infoBox = this.add.image(width/2, height/2, 'info').setScale(0.5);

    }


    update(){

    };
}