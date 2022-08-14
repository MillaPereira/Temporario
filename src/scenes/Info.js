import Phaser from '../lib/phaser.js'

export default class Info extends Phaser.Scene {

    // Construção da cena
    constructor() {
        super('info');
    }

    init(){};

    // Adiciona imagens da cena
    preload() {
        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('quit', './src/sprites/images/Quit.png');
        this.load.image('info', './src/sprites/images/InfoBox.png')
    }

    // Adiciona elementos da cena
    create() {
        var mouseOver = false;

        const {width, height} = this.scale; // pega o tamanho da tela

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10); // adiciona a imagem de fundo
        
        // ======= Botão de sair =======
        const quitButtom = this.add.image(110,40, 'quit').setScale(0.2).setInteractive();
        quitButtom.on('pointerover', () => { // quando o mouse estiver sobre o botão
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

        const infoBox = this.add.image(width/2, height/2, 'info').setScale(0.5); // imagens com as instruções

    }

    update(){

    };
}