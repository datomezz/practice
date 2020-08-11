class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    toggle() {
        let count = 1;
        console.log(this.$el, count);
        this.$el.onclick = function() {

            if(count % 2) {
                this.style.height = "2rem";
                count++;
            } else {
                this.style.height = "4rem";
                count++;
            }
        }
    }
    hide() {
        this.$el.style.display = "none";
    }

    show() {
        this.$el.style.display = "flex";
    }


}

let y = new Component(".box");

class Box extends Component {
    constructor(options) {
        super(options.selector);

        this.$el.style.width = this.$el.style.height = options.size + "rem";
        this.$el.style.background = options.background;
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

        this.$el.style.borderRadius = "50%";
    }
}

const circle1 = new Circle({
    selector : ".circle",
    size : 5,
    background : "green"
}).toggle();