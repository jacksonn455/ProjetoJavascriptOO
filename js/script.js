class Produto { 

    // todos atributos são colocados no metodo contrutor
    constructor(){ 
    // primeira função que é chamada na classe produto é o construtor
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar(){
        let produto = this.lerDados()

        console.log(produto);
    }

    lerDados(){
        let produto = {

        }  //variavel é um objeto

        produto.id = this.id;
        produto.name = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        return produto;
    }

    cancelar(){
        alert("metodo excluir");
    }

}

//instanciar objeto
//normalmente a instancia tem o mesmo nome da classe so que minusculo
var produto = new Produto();