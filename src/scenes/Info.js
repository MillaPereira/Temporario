import Phaser from '../lib/phaser.js'

export default class Info extends Phaser.Scene {

    constructor() {
        super('info');
    }

    init(){};

    preload() {
        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('quit', './src/sprites/images/Quit.png')
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10);
        
        // ======= Botão de sair =======
        const quitButtom = this.add.image(80,30, 'quit').setScale(0.2).setInteractive();
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
            this.scene.start('start');
        });

        setInterval(()=>{

            if(mouseOver === false){
                if(playButtom.scale == (0.4)) playButtom.setScale(0.35);
                else playButtom.setScale(0.4);
            }

        },500);

        // var titleStyle = { font: "bold 40px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        // var rulesStyle = { font: "bold 30px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };

        this.add.text(width/2 - 100, height/2 - 300, 'Instruções',{fontSize: '40px', fill: '#000'});
        this.add.text(width/2 - 70, height/2 - 220, 'Shalalala', {fontSize: '30px', fill: '#000'});

        //title.setTextBounds(0, 100, 800, 100);

    }


    update(){

    };
}