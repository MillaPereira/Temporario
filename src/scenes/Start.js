import Phaser from '../lib/phaser.js'

export default class Start extends Phaser.Scene {

    constructor() {
        super('start');
    }

    init(){};

    preload() {
        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('play', './src/sprites/images/Play.png')
        this.load.image('help', './src/sprites/images/Help.png');
        this.load.image('sun', './src/sprites/images/Sol.png')
        
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10);

        // ======= Botão de Play =======
        const playButtom = this.add.image(width/2, height/2, 'play').setScale(0.35).setInteractive();
        playButtom.on('pointerover', () => {
            playButtom.setScale(0.4);
            playButtom.setTint(0x00FF00)
            mouseOver = true;
        });
        playButtom.on('pointerout', () => {
            playButtom.setScale(0.35);
            playButtom.setTint(0xffffff);
            mouseOver = false;
        });
        playButtom.on('pointerdown', () => {
            this.scene.start('levels');
        });
        
        // ======= Botão de ajuda =======
        const helpButtom = this.add.image(30,30, 'help').setScale(0.2).setInteractive();
        helpButtom.on('pointerover', () => {
            helpButtom.setScale(0.225);
            helpButtom.setTint(0x00FF00)
            mouseOver = true;
        });
        helpButtom.on('pointerout', () => {
            helpButtom.setScale(0.2);
            helpButtom.setTint(0xffffff);
            mouseOver = false;
        });
        helpButtom.on('pointerdown', () => {
            this.scene.start('info');
        });

        this.add.text(150,height/2 - 120, 'Tiramisu de camarão', {fontSize: '32px', fill: '#000'});

        setInterval(()=>{

            if(mouseOver === false){
                if(playButtom.scale == (0.4)) playButtom.setScale(0.35);
                else playButtom.setScale(0.4);
            }

        },500);

        // ======= Solzinho =======
        var sun = this.add.image(width/2, height/2 + 100, 'sun').setScale(0.04);

        var angle = 0;

        setInterval(()=>{
            angle += 0.26;
            sun.setRotation(angle);

        },75);
    }


    update(){
        
    };
}

// Rotação: https://phaser.io/examples/v2/sprites/sprite-rotation
// Jogo exemplo: http://www.davidbrind.co.uk/toemv1.0/index.html
// https://itch.io/games/free/genre-platformer
// Jogo do João: https://github.com/vortex2jm/Dino_Run_Game