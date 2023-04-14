export class Queue<T> {
    container: T[] = [];

    constructor() {
    }

    enqueue(item: T) {
        this.container.push(item);
    }

    dequeue(): T | undefined {
        return this.container.shift();
    }

    size(): number {
        return this.container.length;
    }
}