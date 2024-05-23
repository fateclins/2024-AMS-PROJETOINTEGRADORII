$(document).ready(function(){
    
    $(".btn-edit").click(function () {
        $("#editEnderecoModal").css("display", "block");

        let id = $(this).attr("id")
        viewEndereco(id);

        $("input.id-endereco").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-edit").click(function () {
        $("#editEnderecoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createEndereco
    $(".edit-endereco-btn").click(function (e) {
        e.preventDefault();

        let id = $("input.id-endereco").attr("id")


        editEndereco(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addEnderecoModal").css("display", "none");
    });

    function viewEndereco(id) {
    
        const params = {
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-endereco.php', params, function(result) {

            $('input#pais').val(result.pais)
            $('input#estado').val(result.estado)
            $('input#cidade').val(result.cidade)
            $('input#bairro').val(result.bairro)
            $('input#rua').val(result.rua)
            $('input#numero').val(result.numero)
            $('input#logradouro').val(result.logradouro)
            $('input#idUsuario').val(result.idUsuario)


            $('input#id').val(result.id)
        }, 'json');
    }

    function editEndereco(id) {
        const formData = $("#edit-form").serialize();

        const params = {
            'operacao': 'update',
            'data': formData,
            'id': id
        };
    
        $.post('../model/crud-endereco.php', params, function(result) {
            location.reload();
            if(result.status === 1) {
                console.log('Endereco atualizada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})