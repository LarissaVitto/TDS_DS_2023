module.exports = {
    find: () => {
      return con.select().from("turmas");
    },
    buscaPorId: (id) => {
      return con.select().from("turmas").where("id", "=", id );
    },
    inserir: (turmas) => {
      return con.insert("turmas").into("turmas");
    },
    deletar: (id) => {
      return con("turmas").where({id: id}).del();
    },
    atualizar: (turmas, id) => {
      return con("turmas").update("turmas").where({id: id});
    },
    buscaTodos: () => {
      return con.select().from("turmas");
    },
   /* buscaTodosDepFunc:() =>{
      return con("turmas").innerJoin(
        "dependentes",
        "turma.id",
        "dependentes.turma_id"
      );
    },
    buscaDepFunc:() =>{
      return con.select(
        "TU.ID",
        "TU.NOME AS NOME_TURMA",
        "DEP.NOME AS NOME_DEPENDENTE",
        "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
      )
      .from("TURMA AS TU")
      .innerJoin("DEPENDENTES AS DEP", "TU.ID", "DEP.TURMA_ID")
      .where("TU.ID", id);
    }*/
}