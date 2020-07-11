let x = function (a, b) {return a * b};
console.log(x(2,3), "X");

//მუშა ფუნქცია.
function pizdec() {return function(a,b) {return a*b}}
let y = pizdec();
console.log(y(2,3));

//შეცდომა
function pizdec2(a,b) {return a* b}

let z = pizdec();
console.log(z(2,3)); //შეცდომა დაფიქსირდება. 
//ვინაიდან ცვლადში ჩატენილი ფუნქციისთვის საჭიროა რო ფუნქციამ დააბრუნოს ფუნქცია return function(){return...}

function makeBuffer() {
    var text = "";

    return function(value) {
        if(arguments.length == 0) {
            return text;
        }
        text += value;
    } 
}

var buffer = makeBuffer();

buffer("alakh");
buffer("akbar");
buffer("xairan");

console.log(buffer());

function arrMakeBuffer() {
    let arr = [];

    return function(value) {
        arr.push(value);

        let string = arr.join(" ");

        return {
            string,
            clear : function() {
                return arr = [];

            }
        }
    }
}

let arrBuffer = arrMakeBuffer();

arrBuffer("pizdec");
arrBuffer("podkralsya");
arrBuffer("nezametno");

console.log(arrBuffer());
console.log(arrBuffer().clear())
console.log(arrBuffer());