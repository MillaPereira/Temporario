import Phaser from '../lib/phaser.js'

var level;

export default class Pause extends Phaser.Scene {

    // Construindo a cena
    constructor() {
        super('pause');
    }

    // Função de inicialização
    init(data){
        level = data; // level recebe o valor do level que foi passado como parâmetro
    };

    // Adicionando da imagens
    preload() {
        this.load.image('quit', './src/sprites/images/Quit.png')
        this.load.image('play', './src/sprites/images/Play.png')
    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; // pega o tamanho da tela

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10).setAlpha(0.5); // Adicionando a imagem de fundo

        // ======= Botão de sair =======
        const quitButtom = this.add.image(width/2, height/2 - 100, 'quit').setScale(0.2).setInteractive();
        quitButtom.on('pointerover', () => { // Ao passar o mouse sobre o botão
            quitButtom.setScale(0.225);
            quitButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        quitButtom.on('pointerout', () => {  // Ao tirar o mouse do botão
            quitButtom.setScale(0.2);
            quitButtom.setTint(0xffffff);
            mouseOver = false;
        });
        quitButtom.on('pointerdown', () => {  // Ao clicar no botão
            this.scene.stop('game' + level);  // Para a cena do jogo atual
            this.scene.start('start');        // Inicia a cena de início
            this.scene.stop();                // Para a cena de pause
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
        playButtom.on('pointerdown', () => {   // Ao clicar no botão
            this.scene.resume('game' + level); // Volta para o jogo
            this.scene.stop();
        });
    }

    update(){

    };
}