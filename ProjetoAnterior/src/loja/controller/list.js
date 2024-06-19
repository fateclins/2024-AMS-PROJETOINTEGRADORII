$(document).ready(function(){

    function listLoja() {
        const params={
            'operacao': 'list'
        };
        $.post('../model/crud-loja.php', params, function(result) {
        populateTable(result)
        }, 'json');
        
    }
    
    function populateTable(data) {
        const lojaList = document.querySelector('.loja-list');
        lojaList.innerHTML = '';
    
        data.forEach(loja => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${loja.id}</td>
                <td>${loja.nome}</td>
                <td>${loja.logo}</td>
                <td>${loja.banner}</td>
                <td>${loja.qtdproduto}</td>
                <td>${loja.corfundo}</td>
                <td>${loja.corfonte}</td>
                <td>${loja.area}</td>
                <td>${loja.cnpj}</td>
                <td>${loja.idUsuario}</td>
                <td>
                    <button id="${loja.id}" class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="${loja.id}" class="btn-view">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button id="${loja.id}" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `;
            lojaList.appendChild(row);
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
    
    listLoja();
})

