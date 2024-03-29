const alunoRepository = require("../repository/aluno.repository");

module.exports = {
   
    buscaPorId: (req, res) => {
    const {id} = req.params;
  
    if(!id){
      res.status(404).send({msg: "Parametro id obrigatorio!"});
    }
      alunoRepository
      .buscaPorId(id)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    
  },
    inserir: (req, res) => {
      const aluno = req.body;
      alunoRepository.
      inserir(aluno)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    },
    deletar: (req, res) => {
      const {id} = req.params;
      alunoRepository.
      deletar(id)
      .then(() =>{
        res.send({msg: "Aluno deletado!"});
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    },
    atualizar: (req, res) =>{
      const aluno = req.body;
      const {id} = req.params;
        alunoRepository
        .atualizar(aluno, id)
        .then(() =>{
          res.send({msg: "Aluno atualizado!"});
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
    buscaTodos: (req, res) => {
      alunoRepository
        .find()
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
}