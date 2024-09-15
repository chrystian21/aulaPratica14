class Funcionario{

    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        return('Olá meu nome é ' + this.nome)
    }

    trabalhar(){
        return('É hora de começar a trabalhar')
    }

}

class Gerente extends Funcionario{

    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        return('Começando a gerenciar o time')
    }

}

class Desenvolvedor extends Funcionario{

    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        return('Programando em ' + this.linguagem)
    }

}

export{Funcionario, Gerente, Desenvolvedor}

