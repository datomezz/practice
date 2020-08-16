const fs = require("fs");
const path = require("path");
let date = new Date().getTime();


class CreateUser { 
    constructor(name, surname, price) {
        this.id = date;
        this.name = name,
        this.surname = surname;
        this.price = price;
    }

    toJSON() {
        return {
            name : this.name,
            surname : this.surname,
            id : this.id,
            price : this.price
        }
    }

    async save() {
        const users = await CreateUser.getAll();
        users.push(this.toJSON());

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, "..", "data", "users.json"),
                JSON.stringify(users),
                (err) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }


    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, "..", "data", "users.json"),
                "utf-8",
                (err, content) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(content));
                    }
    
                }
            );
        });
    }

    static async getById(id) {
        const content = await CreateUser.getAll();
        return content.find(item => item.id = id);
    }

    static async reWrite(id, name, surname) {
        const content = await CreateUser.getAll();
        let idx = content.findIndex(item => item.id);
        
        content[idx].name = name;
        content[idx].surname = surname;

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, "..", "data", "users.json"),
                JSON.stringify(content),
                (err) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }
}

module.exports = CreateUser;