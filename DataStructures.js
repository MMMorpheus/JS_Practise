// What is Data Structures?

// Native Js Data Structures:
// Array
// Object
// Set
// Map
// WeakMap, WeakSet

// Other D.S.
// Linked List
//[value, link to the next value(adress)] -> [value, link to the next value(adress)] -> [value, link to the next value(adress)]

/*class LinkedList {
    constuctor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = {data, next: null};
        if(this.tail){
            this.tail.next = node;
        }
        if (!this.head) {
            this.head = node;
        }
        this.tail = node;
    }
    prepend() {
        const node = {data, next: this.head};

        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
         
    }
}

const list = new LinkedList();
list.append('Hi')*/

// Queue

class Queue {
    constructor(...args) {
        this._head = 0;
        this._tail = 0;
        for (const item of args) {
            this.push(item);
        }
    }
    get size() {
        return this.tail - this.head;
    }    
    get tail () {
        return this._tail;
    }
    set tail (v) {
        this._tail = v;
    }
    get head () {
        return this._head;
    }
    set head (v) {
        this._head = v;
    }

    push(value) { // enqueue function analog (add to tail)
        this[this._tail] = value;
        this.tail = this.tail+1;
        return this.size
    }

    pop() { // dequeue function analog (remove from head)
        const firstItem = this[this._head];
        delete this[this._head];
        this.head = this.head+1;
        return firstItem;
    }
}

const queueMerger = function(q1, q2) {
    const resultQue = new Queue;

    while (q1.size || q2.size) {
        if(q1.size){
            resultQue.push(q1.pop());
        }
        if(q2.size){
            resultQue.push(q2.pop());
        }
    }


    return resultQue;
}

const q1 = new Queue(1, 3, 5);
const q2 = new Queue(2, 4, 6);

// Map allows to save key: value
const vocabulary = new Map();

vocabulary.set('cat', 'кошка');
vocabulary.set('dog', 'собака');
vocabulary.set('cucumber', 'огурец');
vocabulary.set('tomato', 'помидор');
vocabulary.set('orange', 'апельсин');
vocabulary.set('pineapplee', 'ананас');
vocabulary.set('car', 'машина');
vocabulary.set('fruit', 'фрукт');
vocabulary.set('vocabulary', 'словарь');
vocabulary.set('can', 'банка');
vocabulary.set('ball', 'мяч');


function translater(string) {
    return string.toLowerCase().split('').map((word) => vocabulary.has(word) ? vocabulary.get(word) :word)
    .join('');
}

// Set Data Strucutre

const nums = [1, 1, 1, 1, 2, 2, 4, 5, 6, 1, 2, 4, 6, 4, 3];

const resultArray = [...new Set(nums).values()];

const nums1 = [9, 2, 0, -10, 5];
const nums2 = [2, 8, 0, 5, 11];

const result = [...new Set(nums1.concat(nums2)).values()];


// Destructurization

const monitor = {
    sizes: {
        height:{
            value: 20,
            scale: 'sm',
        },
        width: {
            value: 40,
            scale: 'sm',
        }
    },
    brightness: 200,
    contrast: 100,
    color:'black',
    dpi: 300,
    resolution: '4K',
    model: {
        company: 'Samsung',
        type: '9872927628347'
    }
}

const { model: {
    model
}} = monitor;

// Homework
// Деструктурировать значения на входе
// Вернуть значение диагонали
function getDiagonal({sizes:{
        height: {
            value: heightVal = 0
        },
        width: {
            value: widthVal = 0
        }
    }}) {
    return `Диагональ экрана составляет ${Math.floor(Math.hypot(heightVal, widthVal)*0.3937)} дюймов`

}
console.log(getDiagonal(monitor));
