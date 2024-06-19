$(document).ready(function () {
  // Ao clicar no botão, exibir o modal
  $("#add-pagamento-btn").click(function () {
    $("#addPagamentoModal").css("display", "block")
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal").click(function () {
    $("#addPagamentoModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createPagamento
  $("#save-pagamento-btn").click(function () {
    createPagamento()
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addPagamentoModal").css("display", "none")
  })

  function createPagamento() {
    const formData = $("#create-form").serialize()

    const params = {
      operacao: "create",
      data: formData,
    }

    $.post(
      "../model/crud-pagamento.php",
      params,
      function (result) {
        console.log(result)
        location.reload()
        if (result.status === 1) {
          console.log("Pagamento criada com sucesso")
        } else {
          console.log("Erro")
        }
      },
      "json"
    )
  }
})
