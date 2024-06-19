$(document).ready(function () {
  function listSubcategoria() {
    const params = {
      operacao: "list",
    }
    $.post(
      "../model/crud-subcategoria.php",
      params,
      function (result) {
        populateTable(result)
      },
      "json"
    )
  }

  function populateTable(data) {
    const subcategoriaList = document.querySelector(".subcategoria-list")
    subcategoriaList.innerHTML = ""

    data.forEach((subcategoria) => {
      const row = document.createElement("tr")
      row.innerHTML = `
                <td>${subcategoria.id}</td>
                <td>${subcategoria.descricao}</td>
                <td>${subcategoria.idCategoria}</td>
                <td>
                    <button id="${subcategoria.id}" class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="${subcategoria.id}" class="btn-view">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button id="${subcategoria.id}" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `
      subcategoriaList.appendChild(row)
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

  listSubcategoria()
})
