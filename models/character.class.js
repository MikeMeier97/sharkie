class Character extends MovableObject{
    height = 250;
    width = 250;
    y = 100;
    IMAGES_IDLE = [
        './assets/img/sharkie/1.IDLE/1.png',
        './assets/img/sharkie/1.IDLE/3.png',
        './assets/img/sharkie/1.IDLE/2.png',
        './assets/img/sharkie/1.IDLE/4.png',
        './assets/img/sharkie/1.IDLE/5.png',
        './assets/img/sharkie/1.IDLE/6.png',
        './assets/img/sharkie/1.IDLE/7.png',
        './assets/img/sharkie/1.IDLE/8.png',
        './assets/img/sharkie/1.IDLE/9.png',
        './assets/img/sharkie/1.IDLE/10.png',
        './assets/img/sharkie/1.IDLE/11.png',
        './assets/img/sharkie/1.IDLE/12.png',
        './assets/img/sharkie/1.IDLE/13.png',
        './assets/img/sharkie/1.IDLE/14.png',
        './assets/img/sharkie/1.IDLE/15.png',
        './assets/img/sharkie/1.IDLE/16.png',
        './assets/img/sharkie/1.IDLE/17.png',
        './assets/img/sharkie/1.IDLE/18.png'
    ];
    IMAGES_SWIM = [
        './assets/img/sharkie/3.Swim/1.png',
        './assets/img/sharkie/3.Swim/2.png',
        './assets/img/sharkie/3.Swim/3.png',
        './assets/img/sharkie/3.Swim/4.png',
        './assets/img/sharkie/3.Swim/5.png',
        './assets/img/sharkie/3.Swim/6.png'
    ];
    world;
    constructor() {
        super().loadImage('./assets/img/sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE); 
        this.animate();
    }
    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 300);
    }
}