import Phaser from '../lib/phaser.js'

var level;

export default class GameOver extends Phaser.Scene {

    // Construção da cena
    constructor() {
        super('gameOver');
    }

    // Inicialização da cena
    init(data){
        level = data;
    };

    // Adiciona as imagens
    preload() {
        this.load.image('inicio', './src/sprites/images/Inicio.ng')
        this.load.image('jogarNovamente', './src/sprites/images/JogarNovamente.png')
        this.load.image('gameOver','../src/sprites/images/GameOver.png')
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; // pega o tamanho da tela

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10).setAlpha(0.5); // Adiciona a imagem de fundo

        // ======= Botão de sair =======
        const quitButtom = this.add.image(width/2, height/2 - 70, 'inicio').setScale(0.2).setInteractive();
        quitButtom.on('pointerover', () => { // Quando o mouse passar sobre o botão
            quitButtom.setScale(0.225);
            quitButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        quitButtom.on('pointerout', () => { // Quando o mouse sair do botão
            quitButtom.setScale(0.2);
            quitButtom.setTint(0xffffff);
            mouseOver = false;
        });
        quitButtom.on('pointerdown', () => { // Quando o mouse clicar no botão
            this.scene.start('start');       // Inicia a cena de início
            this.scene.stop('game' + level); // Para a cena do jogo atual
        });

        // ======= Botão para jogar novamente =======
        const playButtom = this.add.image(width/2, height/2, 'jogarNovamente').setScale(0.2).setInteractive();
        playButtom.on('pointerover', () => { // Ao passar o mouse sobre o botão
            playButtom.setScale(0.225);
            playButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        playButtom.on('pointerout', () => { // Ao tirar o mouse do botão
            playButtom.setScale(0.2);
            playButtom.setTint(0xffffff);
            mouseOver = false;
        });
        playButtom.on('pointerdown', () => { // Ao clicar no botão
            this.scene.stop('game' + level); // Para a cena do jogo atual
            this.scene.start('game' + level); // Inicia a cena de início
            this.scene.stop();                // Para a cena de pause
        });

        // ======= Game Over =======
        this.add.image(width/2, height/2 - 170, 'gameOver').setScale(0.5);
    }

    update(){

    };
}