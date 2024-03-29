const turmaRepository = require("../repository/turma.repository");

module.exports = {
   
    buscaPorId: (req, res) => {
    const {id} = req.params;
  
    if(!id){
      res.status(404).send({msg: "Parametro id obrigatorio!"});

      turmaRepository
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
      const turma = req.body;

      turmaRepository
      .inserir(turma)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    },
    deletar: (req, res) => {
      const {id} = req.params;
      turmaRepository
      .deletar(id)
      .then(() =>{
        res.send({msg: "Turma deletado!"});
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    },
    atualizar: (req, res) =>{
      const turma = req.body;
      const {id} = req.params;
        turmaRepository
        .atualizar(turma, id)
        .then(() =>{
          res.send({msg: "Turma atualizado!"});
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
    buscaTodos: (req, res) => {
      turmaRepository
        .find()
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
}