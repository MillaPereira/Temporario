import Phaser from '../lib/phaser.js'

var level;

export default class Winner extends Phaser.Scene {

    // Construção da cena
    constructor() {
        super('winner');
    }

    // Inicialização da cena
    init(data){
        level = data
    };

    // Adiciona as imagens
    preload() { 
        this.load.image('inicio', './src/sprites/images/Inicio.ng')
        this.load.image('jogarNovamente', './src/sprites/images/JogarNovamente.png')
        this.load.image('winner','../src/sprites/images/Winner.png')
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