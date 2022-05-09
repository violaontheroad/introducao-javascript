var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/paciente")

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach( function(paciente){
                adicionaNaTabela(paciente);
    
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("erro");
        }

    });

    xhr.send ();

})