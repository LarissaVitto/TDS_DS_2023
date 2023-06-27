const petsRepository = require("../repository/pets.repository");
petsRouter = require("../routes/pets.router");

module.exports = {
  find: async (req, res) => {
    const data = await petsRepository
      .find()
      .then((result) => result)
      .catch((error) => {
        res.status(500).send(error);
      });

    res.render("login", { data });
  },
  inserirdono: async (req, res) => {
    let donos = req.body;
    console.log(donos);
    
    const data = await petsRepository.inserirdono(donos);

    
    res.render("cadastropets", { id_dono: data[0]})
    //window.localStorage.setItem("id", JSON.stringify(id));
  },
  inserirpets: async (req, res) => {
    let pets = req.body;
    console.log(pets);
    await petsRepository.inserirpets(pets);
    res.render("inicial");
    //const id_dono = JSON.parse(window.localStorage.getItem("id"));
  }
};
