const con = require("../mysql-connection");
module.exports = {
    find: () => {
        return con.select().from("pets");
    },
    inserirdono: (donos) => {
        return con.insert(donos).into("donos");
      },
    inserirpets: (pets) => {
        return con.insert(pets).into("pets");
    },
}
