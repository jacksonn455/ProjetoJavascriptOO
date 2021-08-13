class Produto {
  // todos atributos são colocados no metodo contrutor
  constructor() {
    // primeira função que é chamada na classe produto é o construtor
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  }

  salvar() {
    let produto = this.lerDados();

    if (this.validaCampos(produto)) {
      if (this.editId == null) {
        this.adicionar(produto);
      } else {
        this.atualizar(this.editId, produto);
      }
    }

    this.listarTababela();
    this.cancelar();
  }

  listarTababela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].name;
      td_valor.innerText = this.arrayProdutos[i].valor;

      td_id.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "img/editing.png";
      imgEdit.setAttribute(
        "onclick",
        "produto.preparaParaEditar(" +
          JSON.stringify(this.arrayProdutos[i]) +
          ")"
      );
      td_acoes.appendChild(imgEdit);

      let imgDel = document.createElement("img");
      imgDel.src = "img/delete.png";
      imgDel.setAttribute(
        "onclick",
        "produto.deletar(" + this.arrayProdutos[i].id + ")"
      );
      td_acoes.appendChild(imgDel);
    }
  }

  atualizar(id, produto) {
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (this.arrayProdutos[i].id == id) {
        this.arrayProdutos[i].name = produto.name;
        this.arrayProdutos[i].valor = produto.valor;
      }
    }
  }

  preparaParaEditar(dados) {
    this.editId = dados.id;
    document.getElementById("produto").value = dados.name;
    document.getElementById("valor").value = dados.valor;

    document.getElementById("btn1").innerText = "Atualizar";
  }

  deletar(id) {
    if (confirm("Deseja realmente deletar o produto do ID: " + id)) {
      let tbody = document.getElementById("tbody");

      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == id) {
          this.arrayProdutos.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }

  adicionar(produto) {
    produto.valor = parseFloat(produto.valor);
    this.arrayProdutos.push(produto);
    this.id++;
  }

  lerDados() {
    let produto = {}; //variavel é um objeto

    produto.id = this.id;
    produto.name = document.getElementById("produto").value;
    produto.valor = document.getElementById("valor").value;

    return produto;
  }

  validaCampos(produto) {
    // faz a validação das tags ID do html
    let msg = "";

    if (produto.name == "") {
      msg += "- Informe o nome do produto \n";
    }

    if (produto.valor == "") {
      msg += "- Informe o valor do produto \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }

  cancelar() {
    produto.name = document.getElementById("produto").value = "";
    produto.valor = document.getElementById("valor").value = "";

    document.getElementById("btn1").innerText = "Salvar";
    this.editId = null;
  }
}

//instanciar objeto
//normalmente a instancia tem o mesmo nome da classe so que minusculo
var produto = new Produto();
