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

    const criaTarefa = textoInput => {
        const li = criaLi();
        li.innerText = textoInput + ' ';
        tarefas.appendChild(li);
        limparInput();
        criaBotaoApagar(li);
    };

    btnTarefa.addEventListener('click', e => {
        e.preventDefault();
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
        }
    });
})();

