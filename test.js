class Test {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

let a = []; // Create an empty array
a.push(new Test(1, 2, 3)); // Push a new Test object into the array
document.write('' + a);

a[1].splice(0, 1, 5); // Modify the 'a' property of the first Test object
document.write('' + a);