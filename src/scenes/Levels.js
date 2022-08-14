import Phaser from '../lib/phaser.js'

export default class Levels extends Phaser.Scene {

    // Construção da cena
    constructor() {
        super('levels');
    }

    init(){};

    // Adiciona imagens da cena
    preload() {
        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('inicio', './src/sprites/images/Inicio.png')

        this.load.image('levelOne', './src/sprites/images/1.png');
        this.load.image('levelTwo', './src/sprites/images/2.png');
        this.load.image('levelThree', './src/sprites/images/3.png');
        this.load.image('levelFour', './src/sprites/images/4.png');
        this.load.image('levelFive', './src/sprites/images/5.png');
    }

    // Adiciona elementos da cena
    create() {
        var mouseOver = false;

        const {width, height} = this.scale; // pega o tamanho da tela

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10); // adiciona a imagem de fundo

        // ======= Botão de sair =======
        const quitButtom = this.add.image(100,40, 'inicio').setScale(0.2).setInteractive();
        quitButtom.on('pointerover', () => {  // quando o mouse estiver sobre o botão
            quitButtom.setScale(0.22);
            quitButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        quitButtom.on('pointerout', () => { // quando o mouse sair do botão
            quitButtom.setScale(0.2);
            quitButtom.setTint(0xffffff);
            mouseOver = false;
        });
        quitButtom.on('pointerdown', () => { // quando o mouse clicar no botão
            this.scene.start('start'); // inicia a cena de inicio
        });

        // ======= Botões de nível =======
        const levelOneButtom = this.add.image(width/2 - 200, height/2, 'levelOne').setScale(0.5).setInteractive();
        levelOneButtom.on('pointerover', () => {
            levelOneButtom.setScale(0.55);
            levelOneButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        levelOneButtom.on('pointerout', () => {
            levelOneButtom.setScale(0.5);
            levelOneButtom.setTint(0xffffff);
            mouseOver = false;
        });
        levelOneButtom.on('pointerdown', () => {
            this.scene.start('game1'); // inicia a cena do nível 1
        });

        const levelTwoButtom = this.add.image(width/2 - 100, height/2, 'levelTwo').setScale(0.5).setInteractive();
        levelTwoButtom.on('pointerover', () => {
            levelTwoButtom.setScale(0.55);
            levelTwoButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        levelTwoButtom.on('pointerout', () => {
            levelTwoButtom.setScale(0.5);
            levelTwoButtom.setTint(0xffffff);
            mouseOver = false;
        });
        levelTwoButtom.on('pointerdown', () => {
            this.scene.start('game2'); // inicia a cena do nível 2
        })

        const levelThreeButtom = this.add.image(width/2, height/2, 'levelThree').setScale(0.5).setInteractive();
        levelThreeButtom.on('pointerover', () => {
            levelThreeButtom.setScale(0.55);
            levelThreeButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        levelThreeButtom.on('pointerout', () => {
            levelThreeButtom.setScale(0.5);
            levelThreeButtom.setTint(0xffffff);
            mouseOver = false;
        });
        levelThreeButtom.on('pointerdown', () => {
            this.scene.start('game3'); // inicia a cena do nível 3
        })

        const levelFourButtom = this.add.image(width/2 + 100, height/2, 'levelFour').setScale(0.5).setInteractive();
        levelFourButtom.on('pointerover', () => {
            levelFourButtom.setScale(0.55);
            levelFourButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        levelFourButtom.on('pointerout', () => {
            levelFourButtom.setScale(0.5);
            levelFourButtom.setTint(0xffffff);
            mouseOver = false;
        });
        levelFourButtom.on('pointerdown', () => {
            this.scene.start('game4'); // inicia a cena do nível 4
        })

        const levelFiveButtom = this.add.image(width/2 + 200, height/2, 'levelFive').setScale(0.5).setInteractive();
        levelFiveButtom.on('pointerover', () => {
            levelFiveButtom.setScale(0.55);
            levelFiveButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        levelFiveButtom.on('pointerout', () => {
            levelFiveButtom.setScale(0.5);
            levelFiveButtom.setTint(0xffffff);
            mouseOver = false;
        });
        levelFiveButtom.on('pointerdown', () => {
            this.scene.start('game5'); // inicia a cena do nível 5
        })
    }

    update(){

    };
}