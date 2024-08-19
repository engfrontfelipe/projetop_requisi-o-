$(document).ready(function(){
   
    $('#btn1').click(function(){
        const endpoint = 'https://raw.githubusercontent.com/engfrontfelipe/projetop_requisi-o-/main/item_supermercados.json'
        
        fetch(endpoint).then(function(resposta){
            return resposta.json()
        })
        .then(function (json) {
            const nome =  json.supermercado
        })
    })
    

})