$(document).ready(function () {
  $(".btn-view").click(function () {
    $("#viewLojaModal").css("display", "block")

    let id = $(this).attr("id")

    viewLoja(id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal-view").click(function () {
    $("#viewLojaModal").css("display", "none")
  })

  function viewLoja(id) {
    const params = {
      operacao: "view",
      data: id,
    }
    $.post(
      "../model/crud-loja.php",
      params,
      function (result) {
        console.log(result)
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
})
