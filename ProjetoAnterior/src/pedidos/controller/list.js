$(document).ready(function(){

    function listPedido() {
        const params={
            'operacao': 'list'
        };
        $.post('../model/crud-pedido.php', params, function(result) {
        populateTable(result)
        }, 'json');
        
    }
    
    function populateTable(data) {
        const pedidoList = document.querySelector('.pedido-list');
        pedidoList.innerHTML = '';
    
        data.forEach(pedido => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pedido.id}</td>
                <td>${pedido.valorTotal}</td>
                <td>${pedido.datap}</td>
                <td>${pedido.statusp}</td>
                <td>${pedido.valorFinal}</td>
                <td>${pedido.desconto}</td>
                <td>${pedido.idUsuario}</td>
                <td>
                    <button id="${pedido.id}" class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="${pedido.id}" class="btn-view">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button id="${pedido.id}" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `;
            pedidoList.appendChild(row);
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
    
    listPedido();
})

