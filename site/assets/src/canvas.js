let cv;
let ctx;
let canvasWidth;
let canvasHeight;
let Lines = [];
let n = 0;

function init() {
    cv = document.querySelector('canvas');
    ctx = cv.getContext('2d');

    // get canvas width
    canvasWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // get canvas height
    canvasHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // set canvas height
    //cv.width = canvasWidth;
    cv.height = canvasHeight;

    loop();
}

function loop() {
    window.requestAnimationFrame(loop,1000/60);

    // backdrop
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0,0,canvasWidth,canvasHeight);

    // every 5th frame draw new line
    if (n%20 === 0) {
        new Line()
        Lines.push(new Line(getRandomInt(0,canvasWidth),getRandomInt(-canvasHeight/2,canvasHeight),getRandomInt(canvasHeight/15,canvasHeight/2),
        getRandomInt(1000,3000),getRandomInt(5,20)/10,getRandomInt(1,4),getRandomColor(),Lines.length));
    }

    // animate lines
    Lines.forEach(line => {
        line.draw();
        if (line.y > canvasHeight) {
            delete Lines[line.arrayInd];
            line = null;
        }
    }); 

    n++;
}

class Line {
    constructor(x,y,length,dur,speed,width,color,arrayInd) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.duration = dur;
        this.lifetime = 0;
        this.speed = speed;
        this.width = width;
        this.color = color;
        this.alpha = 0;
        this.maxAlpha = getRandomInt(0,5)/10;
        this.arrayInd = arrayInd;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x,this.y+this.length);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        this.y += this.speed;
        this.lifetime += 1000/60;

        if (this.lifetime < this.duration) {
            if (this.alpha < this.maxAlpha) {
                this.alpha += 0.01;
            }
        }
        else {
            this.alpha -= 0.01;
            if (this.alpha < 0.01) {
                delete Lines[this.arrayInd];
            }
        }
    }
}

function getRandomColor() {
    // random # 1-3
    /*
    let c = Math.floor(Math.random() * 3) + 1;
    switch (c) {
        case 1:
            //red
            return 'rgb(255,0,0)';
            break;
        case 2:
            //yellow
            return 'rgb(0,255,0)';
            break;
        case 3:
            //blue
            return 'rgb(0,0,255)';
            break;
    }
    */
   return `rgb(${getRandomInt(0,100)},${getRandomInt(0,100)},200)`;
}

function getRandomInt(base,max) {
    return Math.floor(Math.random() * (max - (base-1))) + base;
}

init();