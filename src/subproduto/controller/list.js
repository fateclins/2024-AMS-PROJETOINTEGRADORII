$(document).ready(function () {
  function listSubproduto() {
    const params = {
      operacao: "list",
    }
    $.post(
      "../model/crud-subproduto.php",
      params,
      function (result) {
        populateTable(result)
      },
      "json"
    )
  }

  function populateTable(data) {
    const subprodutoList = document.querySelector(".subproduto-list")
    subprodutoList.innerHTML = ""

    data.forEach((subproduto) => {
      const row = document.createElement("tr")
      row.innerHTML = `
                <td>${subproduto.id}</td>
                <td>${subproduto.idProduto}</td>
                <td>${subproduto.idSubCat}</td>
                <td>
                    <button id="${subproduto.id}" class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="${subproduto.id}" class="btn-view">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button id="${subproduto.id}" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `
      subprodutoList.appendChild(row)
    })
    var view = document.createElement("script")
    view.type = "text/javascript"
    view.src = "../controller/view.js"

    var update = document.createElement("script")
    update.type = "text/javascript"
    update.src = "../controller/update.js"

    var excluir = document.createElement("script")
    excluir.type = "text/javascript"
    excluir.src = "../controller/delete.js"

    $("body").append(excluir)
    $("body").append(update)
    $("body").append(view)
  }

  listSubproduto()
})
