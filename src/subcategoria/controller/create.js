$(document).ready(function () {
  // Ao clicar no botão, exibir o modal
  $("#add-subcategoria-btn").click(function () {
    $("#addSubcategoriaModal").css("display", "block")
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal").click(function () {
    $("#addSubcategoriaModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createSubcategoria
  $("#save-subcategoria-btn").click(function () {
    createSubcategoria()
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addSubcategoriaModal").css("display", "none")
  })

  function createSubcategoria() {
    const formData = $("#create-form").serialize()

    const params = {
      operacao: "create",
      data: formData,
    }

    $.post(
      "../model/crud-subcategoria.php",
      params,
      function (result) {
        console.log(result)
        location.reload()
        if (result.status === 1) {
          console.log("Subcategoria criada com sucesso")
        } else {
          console.log("Erro")
        }
      },
      "json"
    )
  }
})
