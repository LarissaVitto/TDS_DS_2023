const con = require("../mysql-connection");

module.exports = {
    find: () => {
      return con.select().from("alunos");
    },
    buscaPorId: (id) => {
      return con.select().from("alunos").where("id", "=", id );
    },
    inserir: (aluno) => {
      return con.insert(aluno).into("alunos");
    },
    deletar: (id) => {
      return con("alunos").where({id: id}).del();
    },
    atualizar: (aluno, id) => {
      return con(aluno).update("alunos").where({id: id});
    },
    buscaTodos: () => {
      return con.select().from("alunos");
    },
   /*buscaTodosDepFunc:() =>{
      return con("aluno").innerJoin(
        "dependentes",
        "aluno.id",
        "dependentes.aluno_id"
      );
    },
    buscaDepFunc:() =>{
      return con.select(
        "AL.ID",
        "AL.NOME AS NOME_ALUNO",
        "DEP.NOME AS NOME_DEPENDENTE",
        "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
      )
      .from("ALUNO AS AL")
      .innerJoin("DEPENDENTES AS DEP", "AL.ID", "DEP.ALUNO_ID")
      .where("AL.ID", id);
    }*/
}