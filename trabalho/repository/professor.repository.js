module.exports = {
    find: () => {
      return con.select().from("professores");
    },
    buscaPorId: (id) => {
      return con.select().from("professores").where("id", "=", id );
    },
    inserir: (professores) => {
      return con.insert("professores").into("professores");
    },
    deletar: (id) => {
      return con("professores").where({id: id}).del();
    },
    atualizar: (professores, id) => {
      return con("professores").update("professores").where({id: id});
    },
    buscaTodos: () => {
      return con.select().from("professores");
    },
    /*buscaTodosDepFunc:() =>{
      return con("professores").innerJoin(
        "dependentes",
        "professor.id",
        "dependentes.professor_id"
      );
    },
    buscaDepFunc:() =>{
      return con.select(
        "PR.ID",
        "PR.NOME AS NOME_PROFESSOR",
        "DEP.NOME AS NOME_DEPENDENTE",
        "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
      )
      .from("PROFESSOR AS PR")
      .innerJoin("DEPENDENTES AS DEP", "PR.ID", "DEP.PROFESSOR_ID")
      .where("PR.ID", id);
    }*/
}