$(document).ready(function () {
  $(".btn-delete").click(function () {
    $("#deleteSubcategoriaModal").css("display", "block")
    let id = $(this).attr("id")
    console.log(id)

    $(".id-subcategoria").attr("id", id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $(".close-modal-delete").click(function () {
    $("#deleteSubcategoriaModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createSubcategoria
  $(".delete-subcategoria-btn").click(function () {
    let id = $("input.id-subcategoria").attr("id")

    deleteSubcategoria(id)
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addSubcategoriaModal").css("display", "none")
  })

  function deleteSubcategoria(id) {
    const params = {
      operacao: "delete",
      data: id,
    }
    $.post(
      "../model/crud-subcategoria.php",
      params,
      function (result) {
        location.reload()
      },
      "json"
    )
  }
})
