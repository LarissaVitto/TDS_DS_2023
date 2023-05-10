const con = require("../mysql-connection");

module.exports = {
  find: () => {
    return con.select().from("funcionarios");
  },
  buscaPorId: (id) => {
    return con.select().from("funcionarios").where("id", "=", id );
  },
  inserir: (funcionario) => {
    return con.insert("funcionarios").into("funcionarios");
  },
  deletar: (id) => {
    return con("funcionarios").where({id: id}).del();
  },
  atualizar: (id) => {
    return con("funcionarios").update("funcionarios").where({id: id});
  },
  buscaTodosDepFunc:() =>{
    return con("funcionarios").innerJoin(
      "dependentes",
      "funcionarios.id",
      "dependentes.funcionario_id"
    );
  },
  buscaDepFunc:() =>{
    return con.select(
      "FUN.ID",
      "FUN.NOME AS NOME_FUNCIONARIO",
      "DEP.NOME AS NOME_DEPENDENTE",
      "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
    )
    .from("FUNCIONARIO AS FUN")
    .innerJoin("DEPENDENTES AS DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
    .where("FUN.ID", id);
  }
};
