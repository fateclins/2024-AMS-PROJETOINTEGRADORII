$(document).ready(function(){

    function listItemPedido() {
        const params={
            'operacao': 'list'
        };
        $.post('../model/crud-itempedido.php', params, function(result) {
        populateTable(result)
        }, 'json');
        
    }
    
    function populateTable(data) {
        const itempedidoList = document.querySelector('.itempedido-list');
        itempedidoList.innerHTML = '';
    
        data.forEach(itempedido => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${itempedido.id}</td>
                <td>${itempedido.qtdePedida}</td>
                <td>${itempedido.qtdeAtendida}</td>
                <td>${itempedido.valorItem}</td>
                <td>${itempedido.idProduto}</td>
                <td>
                    <button id="${itempedido.id}" class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="${itempedido.id}" class="btn-view">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button id="${itempedido.id}" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `;
            itempedidoList.appendChild(row);
        });
        var view = document.createElement('script');
        view.type='text/javascript';
        view.src='../controller/view.js'
        

        var update = document.createElement('script');
        update.type='text/javascript';
        update.src='../controller/update.js'
        

        var excluir = document.createElement('script');
        excluir.type='text/javascript';
        excluir.src='../controller/delete.js'
        
        $("body").append(excluir);
        $("body").append(update);
        $("body").append(view);
    }
    
    listItemPedido();
})

