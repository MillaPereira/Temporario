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
        this.load.image('titulo', './src/sprites/images/Titulo.png')    
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10);

        // ======= Botão de Play =======
        const playButtom = this.add.image(width/2, height/2, 'play').setScale(0.35).setInteractive();
        playButtom.on('pointerover', () => {
            playButtom.setScale(0.4);
            playButtom.setTint(0x836FFF)
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
        const helpButtom = this.add.image(30,30, 'help').setScale(0.27).setInteractive();
        helpButtom.on('pointerover', () => {
            helpButtom.setScale(0.28);
            helpButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        helpButtom.on('pointerout', () => {
            helpButtom.setScale(0.27);
            helpButtom.setTint(0xffffff);
            mouseOver = false;
        });
        helpButtom.on('pointerdown', () => {
            this.scene.start('info');
        });

        setInterval(()=>{

            if(mouseOver === false){
                if(playButtom.scale == (0.4)) playButtom.setScale(0.35);
                else playButtom.setScale(0.4);
            }

        },500);

        // ======= Solzinho =======
        var sun = this.add.image(width/2, height/2 + 120, 'sun').setScale(0.04);

        var angle = 0;

        setInterval(()=>{
            angle += 0.26;
            sun.setRotation(angle);

        },75);

        // ======= Titulo =======
        this.add.image(width/2, height/2 - 140, 'titulo').setScale(0.5);
    }


    update(){
        
    };
}