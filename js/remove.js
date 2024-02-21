
import { clienteService } from "./service.js";
var clientes = document.querySelectorAll(".clientes__");
var tabela = document.querySelector('.tabela');



    tabela.addEventListener("dblclick", async function(event){
        var alvoDoevento = event.target;
        var paiDoAlvo = alvoDoevento.parentNode;
        const cliente = alvoDoevento.closest('[data-id]')
        let id = cliente.dataset.id
        paiDoAlvo.classList.add("remove-tr");
        
             await clienteService.deletaDados(id);
             cliente.remove()

    })