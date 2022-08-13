import Phaser from '../lib/phaser.js'

var blocoM1, blocoM2;
var blocoR1, blocoR2, blocoR3
var bichinho;
var countBlocks;


export default class Gamea extends Phaser.Scene {

    constructor() {
        super('game4');
    }

    init(){};

    

    preload() {

        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('pause', './src/sprites/images/Pause.png');
        this.load.image('plataform', './src/sprites/images/grass.png');
        this.load.image('bichinho', './src/sprites/images/bichinho.png')

        // ======= Peças de madeira =======
        this.load.image('timber_1x1', './src/sprites/images/Formats/1x1_destroy.png');
        this.load.image('timber_1x2', './src/sprites/images/Formats/1x2_destroy.png');
        this.load.image('timber_1x3', './src/sprites/images/Formats/1x3_destroy.png');
        this.load.image('timber_1x4', './src/sprites/images/Formats/1x4_destroy.png');
        this.load.image('timber_2x1', './src/sprites/images/Formats/2x1_destroy.png');
        this.load.image('timber_3x1', './src/sprites/images/Formats/3x1_destroy.png');
        this.load.image('timber_4x1', './src/sprites/images/Formats/4x1_destroy.png');

        // ======= Peças de pedra =======
        this.load.image('rock_1x1', './src/sprites/images/Formats/1x1_solid.png');
        this.load.image('rock_1x2', './src/sprites/images/Formats/1x2_solid.png');
        this.load.image('rock_1x3', './src/sprites/images/Formats/1x3_solid.png');
        this.load.image('rock_2x1', './src/sprites/images/Formats/2x1_solid.png');
        this.load.image('rock_3x1', './src/sprites/images/Formats/3x1_solid.png');

    }

    create() {
        countBlocks = 2;

        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10);

        // ======= Adicionando plataforma =======
        const plataform = this.matter.add.image(width/2, height, 'plataform', null, { isStatic: true });

        // ======= Botão de Pausa =======
        const pauseButtom = this.add.image(30,30, 'pause').setScale(0.27).setInteractive();
        pauseButtom.on('pointerover', () => {
            pauseButtom.setScale(0.28);
            pauseButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        pauseButtom.on('pointerout', () => {
            pauseButtom.setScale(0.27);
            pauseButtom.setTint(0xffffff);
            mouseOver = false;
        });
        pauseButtom.on('pointerdown', () => {
            this.scene.launch('pause', '4');
            this.scene.pause();
        });

        // // ======= Criando os blocos =======
        blocoM1 = this.add.tileSprite(width/2, height/2 - 40, 0, 0, 'timber_4x1');
        this.matter.add.gameObject(blocoM1).setFrictionAir(0.002).setBounce(0.2).setInteractive();
        blocoM1.on('pointerdown', () => {
            blocoM1.destroy();
            countBlocks--;
            this.desableClick();
        });
        

        blocoM2 = this.add.tileSprite(width/2, height/2 - 100, 0, 0, 'timber_1x3');
        this.matter.add.gameObject(blocoM2).setFrictionAir(0.002).setBounce(0.2).setInteractive();
        blocoM2.on('pointerdown', () => {
            blocoM2.destroy();
            countBlocks--;
            this.desableClick();
        });

        blocoR1 = this.add.tileSprite(width/2, height/2 - 80, 0, 0, 'rock_3x1');
        this.matter.add.gameObject(blocoR1).setFrictionAir(0.002).setBounce(0.2).setInteractive();

        blocoR2 = this.add.tileSprite(width/2 + 50, height/2 + 20, 0, 0, 'rock_1x3');
        this.matter.add.gameObject(blocoR2).setFrictionAir(0.002).setBounce(0.2).setInteractive();

        blocoR3 = this.add.tileSprite(width/2 - 50, height/2 + 20, 0, 0, 'rock_1x3');
        this.matter.add.gameObject(blocoR3).setFrictionAir(0.002).setBounce(0.2).setInteractive();

        // ======= Adicionando colisão entre os objetos =======

        bichinho = this.add.tileSprite(width/2, height/2 - 300, 0, 0, 'bichinho');
        this.matter.add.gameObject(bichinho).setFrictionAir(0.002).setBounce(0.2).setScale(0.14);
        
        // ======= Adicionando colisão entre os objetos =======

        bichinho.setOnCollideWith(plataform, pair => {
            this.gameOver();
        });
    }


    update(){
        if(countBlocks == 0 && bichinho.body.angularSpeed < 0.0002){
            this.gameWin();
        }
        if(!this.checkOutOfBounds){
            this.gameOver();
        }
    };

    desableClick(){
        this.input.mouse.enabled = false;
        this.time.addEvent({ delay: 800, 
                                callback: () => {this.input.mouse.enabled = true}, 
                                callbackScope: this, 
                                loop: true});
    }
    
    enableClick(){
        this.input.mouse.enabled = true;
    }

    checkOutOfBounds(){
        if(bichinho.x < 0){
            return true;
        }
        if(bichinho.x > this.scale.width){
            return true;
        }
        return false;
    }

    gameOver(){
        this.enableClick();
        this.scene.launch('gameOver', '4');
        this.scene.pause('game4');
    }

    gameWin(){
        this.enableClick();
        this.scene.launch('winner', '4');
        this.scene.pause('game4');
    }
}