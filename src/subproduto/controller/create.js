$(document).ready(function () {
  // Ao clicar no botão, exibir o modal
  $("#add-subproduto-btn").click(function () {
    $("#addSubprodutoModal").css("display", "block")
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal").click(function () {
    $("#addSubprodutoModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createSubproduto
  $("#save-subproduto-btn").click(function () {
    createSubproduto()
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addSubprodutoModal").css("display", "none")
  })

  function createSubproduto() {
    const formData = $("#create-form").serialize()

    const params = {
      operacao: "create",
      data: formData,
    }

    $.post(
      "../model/crud-subproduto.php",
      params,
      function (result) {
        console.log(result)
        location.reload()
        if (result.status === 1) {
          console.log("Subproduto criada com sucesso")
        } else {
          console.log("Erro")
        }
      },
      "json"
    )
  }
})
