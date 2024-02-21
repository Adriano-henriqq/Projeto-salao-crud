//var  = document.querySelectorAll("#clientes--");
//console.log(cliente.textContent);

import { clienteService } from "./service.js";

//adiciona os clientes na tabela
var botao = document.querySelector(".botao");

    botao.addEventListener("click", function(event){
        event.preventDefault();
        var form = document.querySelector("#form");
        var clientes = obtemClientes(form);          
        var erros = validaCliente(clientes);
        if(erros.length > 0){
            exibeMensagem(erros);
            return;
        }
        
        form.reset();

        
        clienteService.enviaDados(clientes.nome, clientes.data, clientes.servico, clientes.horario);
        
    })
    
    function formatarData(cliente) {
        // Obtém o valor do input
       
        const inputData = cliente; 
      
        // Converte a data para o formato desejado (dia/mês/ano)
        const data = new Date(inputData);
        const dia = data.getDate().toString().padStart(2, "0");
        const mes = (data.getMonth() + 1).toString().padStart(2, "0");
        const ano = data.getFullYear();
      
        // Monta a data formatada
        const dataFormatada = `${dia}/${mes}/${ano}`;
      
        // Exibe a data formatada
         inputData = dataFormatada;
    }
    
    
    //obtem os clientes que serão escritos no formulario
    export function obtemClientes (form){
    var clientes = {
        nome : form.nome.value,
        data : form.data.value,
        servico : form.servico.value,
        horario : form.horario.value
    }
    return clientes;
}  

    
    //verifica se os dados inputados são válidos
    function validaCliente(cliente){
        var erro = []
        if(cliente.nome.length == 0){
            erro.push("nome inválido");
        }
        if(cliente.data.length == 0){
            erro.push("data inválida");
        }
        if(cliente.servico.length == 0){
            erro.push("serviço inválido");
        }
        if(cliente.horario.length == 0){
            erro.push("horario inválido");
        }
        return erro;
    }
    //exibe a mensagem de erro, caso os dados inputados sejam inválidos
    function exibeMensagem (erros){
        var ul = document.querySelector("#mensagem-erro");
        ul.innerHTML = ""
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        })

    }
    
    
    

    