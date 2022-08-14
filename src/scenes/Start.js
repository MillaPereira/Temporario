import Phaser from '../lib/phaser.js'

export default class Start extends Phaser.Scene {

    // Costrução da cena
    constructor() {
        super('start');
    }

    init(){};

    // Adiciona imagens da cena
    preload() {
        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('play', './src/sprites/images/Play.png')
        this.load.image('help', './src/sprites/images/Help.png');
        this.load.image('sun', './src/sprites/images/Sol.png')
        this.load.image('titulo', './src/sprites/images/Titulo.png')    
    }

    // Adiciona elementos da cena
    create() {
        var mouseOver = false;

        const {width, height} = this.scale; // pega o tamanho da tela
 
        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10); // adiciona a imagem de fundo

        // ======= Botão de Play =======
        const playButtom = this.add.image(width/2, height/2, 'play').setScale(0.35).setInteractive();
        playButtom.on('pointerover', () => { // quando o mouse estiver sobre o botão
            playButtom.setScale(0.4);
            playButtom.setTint(0x836FFF)
            mouseOver = true;
        });
        playButtom.on('pointerout', () => { // quando o mouse sair do botão
            playButtom.setScale(0.35);
            playButtom.setTint(0xffffff);
            mouseOver = false;
        });
        playButtom.on('pointerdown', () => { // quando o mouse clicar no botão
            this.scene.start('levels'); // inicia a cena de levels
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
            this.scene.start('info'); // inicia a cena de informações
        });

        setInterval(()=>{ // função para animação do botão de play

            if(mouseOver === false){
                if(playButtom.scale == (0.4)) playButtom.setScale(0.35);
                else playButtom.setScale(0.4);
            }

        },500);

        // ======= Solzinho =======
        var sun = this.add.image(width/2, height/2 + 120, 'sun').setScale(0.04);

        var angle = 0;

        setInterval(()=> { // função para animação do solzinho
            angle += 0.26;
            sun.setRotation(angle);

        },75);

        // ======= Titulo =======
        this.add.image(width/2, height/2 - 140, 'titulo').setScale(0.5);
    }


    update(){
        
    };
}