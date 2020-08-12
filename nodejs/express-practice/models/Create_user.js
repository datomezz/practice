const fs = require("fs");
const path = require("path");
let date = new Date().getTime();


class CreateUser { 
    constructor(name, surname) {
        this.id = date;
        this.name = name,
        this.surname = surname;
    }

    toJSON() {
        return {
            name : this.name,
            surname : this.surname,
            id : this.id
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

        console.log(users);
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
        return content.find(item => item.id === id);
    }
}

module.exports = CreateUser;