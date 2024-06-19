$(document).ready(function () {
  function listPagamento() {
    const params = {
      operacao: "list",
    }
    $.post(
      "../model/crud-pagamento.php",
      params,
      function (result) {
        populateTable(result)
      },
      "json"
    )
  }

  function populateTable(data) {
    const pagamentoList = document.querySelector(".pagamento-list")
    pagamentoList.innerHTML = ""

    data.forEach((pagamento) => {
      const row = document.createElement("tr")
      row.innerHTML = `
                <td>${pagamento.id}</td>
                <td>${pagamento.datap}</td>
                <td>${pagamento.valor}</td>
                <td>${pagamento.operacao}</td>
                <td>${pagamento.statusp}</td>
                <td>${pagamento.idPedido}</td>
                <td>
                    <button id="${pagamento.id}" class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="${pagamento.id}" class="btn-view">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button id="${pagamento.id}" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `
      pagamentoList.appendChild(row)
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

  listPagamento()
})
