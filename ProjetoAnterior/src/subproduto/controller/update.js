$(document).ready(function () {
  $(".btn-edit").click(function () {
    $("#editSubprodutoModal").css("display", "block")

    let id = $(this).attr("id")
    viewSubproduto(id)

    $("input.id-subproduto").attr("id", id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal-edit").click(function () {
    $("#editSubprodutoModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createSubproduto
  $(".edit-subproduto-btn").click(function (e) {
    e.preventDefault()

    let id = $("input.id-subproduto").attr("id")

    editSubproduto(id)
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addSubprodutoModal").css("display", "none")
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
        $("input#idProduto").val(result.idProduto)
        $("input#idSubCat").val(result.idSubCat)

        $("input#id").val(result.id)
      },
      "json"
    )
  }

  function editSubproduto(id) {
    const formData = $("#edit-form").serialize()

    const params = {
      operacao: "update",
      data: formData,
      id: id,
    }

    $.post(
      "../model/crud-subproduto.php",
      params,
      function (result) {
        location.reload()
        if (result.status === 1) {
          console.log("Subproduto atualizada com sucesso")
        } else {
          console.log("Erro")
        }
      },
      "json"
    )
  }
})
