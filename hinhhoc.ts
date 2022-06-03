export class Shape {
    color: string;
    filled: boolean
    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}
export class Circle {
    color: string;
    radius: number;
    filled: boolean;
    constructor(radius: number, 
                color: string, 
                filled: boolean) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }

}