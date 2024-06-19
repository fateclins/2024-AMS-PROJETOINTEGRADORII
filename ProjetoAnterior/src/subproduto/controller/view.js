$(document).ready(function () {
  $(".btn-view").click(function () {
    $("#viewSubprodutoModal").css("display", "block")

    let id = $(this).attr("id")

    viewSubproduto(id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal-view").click(function () {
    $("#viewSubprodutoModal").css("display", "none")
  })

  function viewSubproduto(id) {
    const params = {
      operacao: "view",
      data: id,
    }
    $.post(
      "../model/crud-subproduto.php",
      params,
      function (result) {
        console.log(result)
        $("input#idProduto").val(result.idProduto)
        $("input#idSubCat").val(result.idSubCat)

        $("input#id").val(result.id)
      },
      "json"
    )
  }
})
