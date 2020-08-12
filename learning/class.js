class Component {
    constructor(selector) {
        this.$el = document.querySelectorAll(selector);
    }

    toggle() {
        let count = 1;
        if(this.$el.length > 0) {
            this.$el.forEach(item => {
                item.onclick = function() {
                    if(count % 2) {
                        item.style.height  = "2rem";
                        count++;
                    } else {
                        item.style.height = "4rem";
                        count++;
                    }
                }
            });
        }
    }

    createBox() {
        let element = `<div class="box"></div>`;
        document.querySelector("body").innerHTML += element;
    }

    createCircle() {
        let element = `<div class="circle"></div>`;
        document.querySelector("body").innerHTML += element;
    }

    hide() {
        this.$el.style.display = "none";
    }

    show() {
        this.$el.style.display = "flex";
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);

        for(let i = 0; i < this.$el.length; i++) {
            this.$el[i].style.width = this.$el[i].style.height = options.size + "rem";
            this.$el[i].style.background = options.background;
        }
    }
}

let x = document.querySelector(".box");

const box1 = new Box({
    selector : ".box",
    size : 4,
    background : "red",
}).toggle();

class Circle extends Box {
    constructor(options) {
        super(options);

        for(let i = 0; i < this.$el.length; i++) {
            this.$el[i].style.borderRadius = "50%";
        }
    }
}

const circle1 = new Circle({
    selector : ".circle",
    size : 5,
    background : "green"
}).toggle();