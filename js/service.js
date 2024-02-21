export const enviaDados = (nome, data, servico, horario)=>{
    return fetch( `https://my-json-server.typicode.com/Adriano-henriqq/db-clientes/clientes`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            data: data,
            servico: servico,
            horario: horario
        })
       
    })
    .then(resposta=>{
        return resposta.body
    })
    
    
}

const pegaDados = ()=>{
    return fetch(`https://my-json-server.typicode.com/Adriano-henriqq/db-clientes/clientes`)
    .then(resposta =>{
        return resposta.json();
    })
}

const deletaDados = (id)=>{
    return fetch(`https://my-json-server.typicode.com/Adriano-henriqq/db-clientes/clientes/${id}`,{
        method: 'DELETE'
    })
    .then(resposta =>{
        if(!resposta.ok){
            throw new Error ('não foi possivel deletar os clientes')
        }
    })
}


export const clienteService = {
    enviaDados,
    pegaDados,
    deletaDados
}