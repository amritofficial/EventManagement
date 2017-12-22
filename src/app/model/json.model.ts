export class JsonModel {
    window: {
        title: string,
        name: string,
        width: number,
        height: number
    }

    constructor(title: string,
        name: string,
        width: number,
        height: number) {

            this.window.title = title;
            this.window.name = name;
            this.window.width = width;
            this.window.height = height;
    }
}