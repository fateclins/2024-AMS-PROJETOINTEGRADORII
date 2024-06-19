$(document).ready(function () {
  $(".btn-view").click(function () {
    $("#viewSubcategoriaModal").css("display", "block")

    let id = $(this).attr("id")

    viewSubcategoria(id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal-view").click(function () {
    $("#viewSubcategoriaModal").css("display", "none")
  })

  function viewSubcategoria(id) {
    const params = {
      operacao: "view",
      data: id,
    }
    $.post(
      "../model/crud-subcategoria.php",
      params,
      function (result) {
        console.log(result)
        $("input#descricao").val(result.descricao)
        $("input#idCategoria").val(result.idCategoria)

        $("input#id").val(result.id)
      },
      "json"
    )
  }
})
