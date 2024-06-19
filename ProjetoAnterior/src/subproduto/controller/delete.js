$(document).ready(function () {
  $(".btn-delete").click(function () {
    $("#deleteSubprodutoModal").css("display", "block")
    let id = $(this).attr("id")
    console.log(id)

    $(".id-subproduto").attr("id", id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $(".close-modal-delete").click(function () {
    $("#deleteSubprodutoModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createSubproduto
  $(".delete-subproduto-btn").click(function () {
    let id = $("input.id-subproduto").attr("id")

    deleteSubproduto(id)
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addSubprodutoModal").css("display", "none")
  })

  function deleteSubproduto(id) {
    const params = {
      operacao: "delete",
      data: id,
    }
    $.post(
      "../model/crud-subproduto.php",
      params,
      function (result) {
        location.reload()
      },
      "json"
    )
  }
})
