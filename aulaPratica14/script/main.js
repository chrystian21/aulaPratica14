import { Funcionario, Gerente, Desenvolvedor } from "./classes.js";

let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let cargo = document.getElementById('cargo');
let departamento = document.getElementById('departamento');
let labelDepartamento = document.querySelector('.departamento');
let linguagem = document.getElementById('linguagem');
let labelLinguagem = document.querySelector('.linguagem');
let tipo = document.getElementById('tipo');
let salvar = document.getElementById('salvar');
let listaFuncionarios = [];

tipo.addEventListener('change', function() {
    if (tipo.value === 'gerente') {
        departamento.classList.remove('hidden');
        labelDepartamento.classList.remove('hidden');
        linguagem.classList.add('hidden');
        labelLinguagem.classList.add('hidden');
    } else if (tipo.value === 'desenvolvedor') {
        linguagem.classList.remove('hidden');
        labelLinguagem.classList.remove('hidden');
        departamento.classList.add('hidden');
        labelDepartamento.classList.add('hidden');
    } else {
        departamento.classList.add('hidden');
        labelDepartamento.classList.add('hidden');
        linguagem.classList.add('hidden');
        labelLinguagem.classList.add('hidden');
    }
});

salvar.addEventListener('click', function(event){
    event.preventDefault();
    
    try {
        const nomeInput = nome.value.trim();
        const idadeInput = parseInt(idade.value.trim(), 10);
        const cargoInput = cargo.value.trim(); 
        const departamentoInput = departamento.value.trim();
        const linguagemInput = linguagem.value.trim();
        
        if (!nomeInput || isNaN(idadeInput) || !cargoInput) {
            throw new Error('Nome, idade ou cargo não preenchidos corretamente.');
        }
        
        let novoFuncionario;
        
        if (tipo.value === 'gerente') {
            if (!departamentoInput) {
                throw new Error('Departamento não preenchido.');
            }
            novoFuncionario = new Gerente(nomeInput, idadeInput, cargoInput, departamentoInput);
        } else if (tipo.value === 'desenvolvedor') {
            if (!linguagemInput) {
                throw new Error('Linguagem não preenchida.');
            }
            novoFuncionario = new Desenvolvedor(nomeInput, idadeInput, cargoInput, linguagemInput);
        } else {
            novoFuncionario = new Funcionario(nomeInput, idadeInput, cargoInput)
        }

        listaFuncionarios.push(novoFuncionario);
        console.log(listaFuncionarios);
        
        exibirInformacoes(novoFuncionario);
        
    } catch (erro) {
        exibirErro(erro.message);
    }
});

function exibirInformacoes(funcionario) {
    const infoDiv = document.getElementById('informacoes');
    infoDiv.innerHTML = `
        <h2>Informações do Funcionário</h2>
        <p>Nome: ${funcionario.nome}</p>
        <p>Idade: ${funcionario.idade}</p>
        <p>Cargo: ${funcionario.cargo}</p>
        ${funcionario instanceof Gerente ? `<p>Departamento: ${funcionario.departamento}</p>` : ''}
        ${funcionario instanceof Desenvolvedor ? `<p>Linguagem: ${funcionario.linguagem}</p>` : ''}
        <p>Apresentação: ${funcionario.seApresentar()}</p>
        <p>Trabalho: ${funcionario.trabalhar()}</p>
        ${funcionario instanceof Gerente ? `<p>Gerenciar: ${funcionario.gerenciar()}</p>` : ''}
        ${funcionario instanceof Desenvolvedor ? `<p>Programar: ${funcionario.programar()}</p>` : ''}
    `;
}

function exibirErro(mensagem) {
    const infoDiv = document.getElementById('informacoes');
    infoDiv.innerHTML = `<p class="erro">${mensagem}</p>`;
}




