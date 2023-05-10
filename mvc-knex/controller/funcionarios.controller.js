const funcionariosRepository = require("../repository/funcionarios.repository");

module.exports = {
  buscaTodos: (req, res) => {
    funcionariosRepository
      .find()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaPorId: (req, res) => {
  const {id} = req.params;

  if(!id){
    res.status(404).send({msg: "Parametro id obrigatorio!"});
  }
  buscaPorId: (req, res) =>{
    funcionariosRepository
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
    funcionariosRepository.
    inserir()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  },
  deletar: (req, res) => {
    const {id} = req.params;

    funcionariosRepository.
    deletar(id)
    .then(() =>{
      res.send({msg: "Funcionario deletado!"});
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  },
  atualizar: (req, res) =>{
    const funcionario = req.body;
    const {id} = req.params;

      funcionariosRepository
      .atualizar(funcionario, id)
      .then(() =>{
        res.send({msg: "Funcionario atualizado!"});
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaTodosDepFunc: (req, res) => {
    funcionariosRepository
    .buscaTodosDepFunc()
    .then((data) => {
      res.send(data);
    })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaDepFunc: (req, res) =>{
    funcionariosRepository.buscaDepFunc(id)
    .then((data) => {
      res.send(data);
    })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
}