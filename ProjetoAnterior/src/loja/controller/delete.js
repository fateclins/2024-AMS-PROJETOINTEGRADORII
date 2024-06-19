$(document).ready(function(){
    
    $(".btn-delete").click(function () {
        $("#deleteLojaModal").css("display", "block");
        let id = $(this).attr("id")
        console.log(id)

        $(".id-loja").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $(".close-modal-delete").click(function () {
        $("#deleteLojaModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createLoja
    $(".delete-loja-btn").click(function () {

        let id = $("input.id-loja").attr("id")

        deleteLoja(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addLojaModal").css("display", "none");
    });

    function deleteLoja(id) {
        const params={
            'operacao': 'delete',
            'data': id
        };
        $.post('../model/crud-loja.php', params, function(result) {
            location.reload();
        }, 'json');
        
    }
})