const professorRepository = require("../repository/professor.repository");

module.exports = {
   
    buscaPorId: (req, res) => {
    const {id} = req.params;
  
    if(!id){
      res.status(404).send({msg: "Parametro id obrigatorio!"});
      professorRepository
      .buscaPorId(id)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    }
  },
    inserir: (req, res) => {
      const professor = req.body;
      professorRepository
      .inserir(professor)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    },
    deletar: (req, res) => {
      const {id} = req.params;
      professorRepository
      .deletar(id)
      .then(() =>{
        res.send({msg: "Professor deletado!"});
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    },
    atualizar: (req, res) =>{
      const professor = req.body;
      const {id} = req.params;
        professorRepository
        .atualizar(professor, id)
        .then(() =>{
          res.send({msg: "Professor atualizado!"});
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
    buscaTodos: (req, res) => {
      professorRepository
        .find()
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
}