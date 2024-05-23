$(document).ready(function(){
    
    $(".btn-delete").click(function () {
        $("#deleteEnderecoModal").css("display", "block");
        let id = $(this).attr("id")
        console.log(id)

        $(".id-endereco").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $(".close-modal-delete").click(function () {
        $("#deleteEnderecoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createEndereco
    $(".delete-endereco-btn").click(function () {

        let id = $("input.id-endereco").attr("id")

        deleteEndereco(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addEnderecoModal").css("display", "none");
    });

    function deleteEndereco(id) {
        const params={
            'operacao': 'delete',
            'data': id
        };
        $.post('../model/crud-endereco.php', params, function(result) {
            location.reload();
        }, 'json');
        
    }
})