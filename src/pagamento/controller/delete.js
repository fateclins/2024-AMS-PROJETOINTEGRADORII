$(document).ready(function () {
  $(".btn-delete").click(function () {
    $("#deletePagamentoModal").css("display", "block")
    let id = $(this).attr("id")
    console.log(id)

    $(".id-pagamento").attr("id", id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $(".close-modal-delete").click(function () {
    $("#deletePagamentoModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createPagamento
  $(".delete-pagamento-btn").click(function () {
    let id = $("input.id-pagamento").attr("id")

    deletePagamento(id)
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addPagamentoModal").css("display", "none")
  })

  function deletePagamento(id) {
    const params = {
      operacao: "delete",
      data: id,
    }
    $.post(
      "../model/crud-pagamento.php",
      params,
      function (result) {
        location.reload()
      },
      "json"
    )
  }
})
