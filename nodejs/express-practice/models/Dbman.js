const con = require("../routes/mysql");

class Dbman {
    constructor() {

    }

    static async update(options) {
        con.query(
            `UPDATE ${options.table} SET ${options.set} WHERE ${options.where}`,
            (err) => {
                if(err) throw err;
            }
        );

        console.log("Updated successfully");
    }

    static async selectAll(table) {
        let obj = {};

        con.query(
            `SELECT * FROM ${table}`,
            (err, result) => {
                if(err) throw err;
                
                for(let i = 0; i < result.length; i++) {
                    obj[result[i]["id"]] = result[i];
                }
                console.log("Selected items", obj);
            }
        );
        return obj;
    }

    static async insertInto(options) {
        con.query(
            `INSERT INTO ${options.table} VALUES (${options.values})`,
            (err) => {
                if(err) throw err;
                console.log("1 record inserted");
            }
        )
    }
}

module.exports = Dbman;