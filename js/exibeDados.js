import { clienteService } from "./service.js";

    
document.addEventListener('DOMContentLoaded', async()=>{
    const clientes = await clienteService.pegaDados();
    var tabela = document.querySelector("#add-tabela");
    exibeTr();
})


async function exibeTr(){
    var tabela = document.querySelector("#add-tabela");
    const listaClientes = await clienteService.pegaDados();
    listaClientes.forEach(elemento =>{
        tabela.appendChild(montaTr(elemento, elemento.id))
        
    })
   
}    
//monta a tr e add as tds na nossa tr
function montaTr (cliente, id ){
   var clienteTr = document.createElement('tr');
   clienteTr.classList.add('clientes__');
   
  
    clienteTr.appendChild(montaTd(cliente.nome, "tabela__corpo-clientes-nome"));
    clienteTr.appendChild(montaTd(formataData(cliente.data), "tabela__corpo-clientes"));
    clienteTr.appendChild(montaTd(cliente.servico, "tabela__corpo-clientes"));
    clienteTr.appendChild(montaTd(cliente.horario, "tabela__corpo-clientes"));
    clienteTr.dataset.id = id
   

   

   return clienteTr;
}
//monta as nossas tds

function montaTd (dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td
}
//formata a data do padrão para o estilo desejado
function formataData(data){
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}