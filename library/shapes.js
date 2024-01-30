class Shapes {
    constructor(color) {
        this.color = color;
    }

}

class Circle extends Shapes {
    constructor(color) {
        super(color);
        this.radius = 50;
        this.cx = 50;
        this.cy = 50;
        this.render = function () {
            return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}"></circle>`;
        }
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color);
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = 0;
        this.render = function () {
            return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"></rect>`;
        }
    }
}

class Triangle extends Shapes {
    constructor(color) {
        super(color);
        this.points = "50,0 0,100 100,100";
        this.render = function () {
            return `<polygon points="${this.points}" fill="${this.color}"></polygon>`;
        }
    }
}

module.exports = { Circle, Square, Triangle };