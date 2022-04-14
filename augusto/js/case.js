const verificarProduto = function(opcao){
let resultado = "<br><h3>Opção selecionada</h3><br><br>"
switch(opcao){
    case 'hb1':
        resultado += "Hambúrguer Simples custa R$ 30,10"
        console.log('Hambúrguer Simples está com preço de R$30,10');
        break;
    case 'hb2':
        resultado += "Hambúrguer Duplo custa R$ 38,10"
        console.log('Hambúrguer Duplo está com preço de R$38,10');    
        break;
    case 'hb3':
        resultado += "Hambúrguer Triplo custa R$ 40,10"
        console.log('Hambúrguer Triplo está com preço de R$40,10');    
        break;
    case 'hb4':
        resultado += "Hambúrguer Bacon custa R$ 45,10"
        console.log('Hambúrguer Bacon está com preço de R$45,10');    
        break;
    default:
        console.log('Opção inválida');
        break;
}
    document.getElementById('resultado').innerHTML = resultado
}