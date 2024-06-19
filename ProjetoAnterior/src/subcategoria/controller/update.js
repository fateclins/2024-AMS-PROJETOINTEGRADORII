$(document).ready(function () {
  $(".btn-edit").click(function () {
    $("#editSubcategoriaModal").css("display", "block")

    let id = $(this).attr("id")
    viewSubcategoria(id)

    $("input.id-subcategoria").attr("id", id)
  })

  // Ao clicar no botão de fechar, fechar o modal
  $("#close-modal-edit").click(function () {
    $("#editSubcategoriaModal").css("display", "none")
  })

  // Ao clicar no botão de salvar, chamar a função createSubcategoria
  $(".edit-subcategoria-btn").click(function (e) {
    e.preventDefault()

    let id = $("input.id-subcategoria").attr("id")

    editSubcategoria(id)
    // Fechar o modal após salvar (ajuste conforme necessário)
    $("#addSubcategoriaModal").css("display", "none")
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
        $("input#descricao").val(result.descricao)
        $("input#idCategoria").val(result.idCategoria)

        $("input#id").val(result.id)
      },
      "json"
    )
  }

  function editSubcategoria(id) {
    const formData = $("#edit-form").serialize()

    const params = {
      operacao: "update",
      data: formData,
      id: id,
    }

    $.post(
      "../model/crud-subcategoria.php",
      params,
      function (result) {
        location.reload()
        if (result.status === 1) {
          console.log("Subcategoria atualizada com sucesso")
        } else {
          console.log("Erro")
        }
      },
      "json"
    )
  }
})
