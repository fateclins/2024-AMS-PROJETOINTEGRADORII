$(document).ready(function () {
  $(".btn-edit").click(function () {
    $("#editPagamentoModal").css("display", "block")

    let id = $(this).attr("id")
    viewPagamento(id)

    $("input.id-pagamento").attr("id", id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal-edit").click(function () {
    $("#editPagamentoModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createPagamento
  $(".edit-pagamento-btn").click(function (e) {
    e.preventDefault()

    let id = $("input.id-pagamento").attr("id")

    editPagamento(id)
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addPagamentoModal").css("display", "none")
  })

  function viewPagamento(id) {
    const params = {
      operacao: "view",
      data: id,
    }
    $.post(
      "../model/crud-pagamento.php",
      params,
      function (result) {
        $("input#datap").val(result.datap)
        $("input#valor").val(result.valor)
        $("input#operacao").val(result.operacao)
        $("input#statusp").val(result.statusp)
        $("input#idPedido").val(result.idPedido)

        $("input#id").val(result.id)
      },
      "json"
    )
  }

  function editPagamento(id) {
    const formData = $("#edit-form").serialize()

    const params = {
      operacao: "update",
      data: formData,
      id: id,
    }

    $.post(
      "../model/crud-pagamento.php",
      params,
      function (result) {
        location.reload()
        if (result.status === 1) {
          console.log("Pagamento atualizada com sucesso")
        } else {
          console.log("Erro")
        }
      },
      "json"
    )
  }
})
