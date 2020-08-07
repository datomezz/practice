//Static Method, polimorphism, where we don't know what kind of type will be put
function User(info){
    if(info) {
        this.name = info.name;
        this.surname = info.surname;
        this.age = info.age;
    } else {
        this.name = "Anonym";
    }

    this.wtsup = function() {
        console.log("wsup?", this.name + this.surname, this.age);
    }
}

let guest = new User();
let userId = new User({
    name : "Dato",
    surname : "Podkralsya",
    age : "24"
});

userId.wtsup();
guest.wtsup(); //Guest Will have undefined values because WTSUP function needs three parametrs. 

//Fabrican Method

function Useri() {
    this.wtsup = function() {
        console.log("wtsup", this.name);
    }
}

Useri.Anonym = function() {
    let user = new Useri;
    user.name = "Anonymous";
    return user;
}

Useri.id = function(info) {
    let user = new Useri;
    user.name = info.name;
    user.surname = info.surname;
    return user;
}

let newGuest = Useri.Anonym();
newGuest.wtsup();

let userWithId = Useri.id({
    name : "Dato",
    surname : "mezz"
});
userWithId.wtsup();