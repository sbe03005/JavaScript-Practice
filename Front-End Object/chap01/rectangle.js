class Rectangle {
    constructor(x1, x2, y1, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    get width() {
        return Math.abs(this.x2 - this.x1);
    }

    set width(width) {
        this.x2 = this.x1 + this.width;
    }

    get height() {
        return Math.abs(this.y2 - this.y1);
    }

    set height(height) {
        this.y2 = this.y1 + height;
    }
}

let rectangle = new Rectangle(5,5,20,25);
rectangle.width=30;
rectangle.height=30;

console.log(rectangle);
console.log(rectangle.width + rectangle.height);