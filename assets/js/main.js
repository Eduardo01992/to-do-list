"use strict";

(function () {
    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

    const criaBotaoApagar = (li) => {
        const btnApagar = document.createElement('button');
        btnApagar.innerText = 'Apagar';
        // btnApagar.classList.add('apagar');
        btnApagar.setAttribute('class', 'apagar');
        li.appendChild(btnApagar);
    };

    const limparInput = () => {
        inputTarefa.value = '';
        inputTarefa.focus();
    };

    const criaLi = () => {
        const li = document.createElement('li');
        return li;
    };

    const salvarTarefas = () => {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    };

    const criaTarefa = textoInput => {
        const li = criaLi();
        li.innerText = textoInput + ' ';
        tarefas.appendChild(li);
        limparInput();
        criaBotaoApagar(li);
        salvarTarefas();
    };

    const adicionaTarefasSalvas = () => {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
    };
    adicionaTarefasSalvas();

    btnTarefa.addEventListener('click', e => {
        e.preventDefault();
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvarTarefas();
        }
    });
})();

