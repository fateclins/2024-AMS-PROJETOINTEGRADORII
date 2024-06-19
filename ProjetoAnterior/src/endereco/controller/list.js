$(document).ready(function(){

    function listEndereco() {
        const params={
            'operacao': 'list'
        };
        $.post('../model/crud-endereco.php', params, function(result) {
        populateTable(result)
        }, 'json');
        
    }
    
    function populateTable(data) {
        const enderecoList = document.querySelector('.endereco-list');
        enderecoList.innerHTML = '';
    
        data.forEach(endereco => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${endereco.id}</td>
                <td>${endereco.pais}</td>
                <td>${endereco.estado}</td>
                <td>${endereco.cidade}</td>
                <td>${endereco.bairro}</td>
                <td>${endereco.rua}</td>
                <td>${endereco.numero}</td>
                <td>${endereco.logradouro}</td>
                <td>${endereco.idUsuario}</td>
                <td>
                    <button id="${endereco.id}" class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="${endereco.id}" class="btn-view">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button id="${endereco.id}" class="btn-delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `;
            enderecoList.appendChild(row);
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
    
    listEndereco();
})

