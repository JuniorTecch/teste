// Adiciona um efeito de rolagem suave ao clicar nos links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adiciona validação ao formulário de contato
document.querySelector('form').addEventListener('submit', function (e) {
    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensagem = document.querySelector('#mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});


function searchFunction() {
    const query = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const title = section.querySelector('h2') ? section.querySelector('h2').innerText.toLowerCase() : '';
        const description = section.querySelector('p') ? section.querySelector('p').innerText.toLowerCase() : '';
        
        if (title.includes(query) || description.includes(query)) {
            section.style.display = 'block'; // Exibe a seção se houver correspondência
        } else {
            section.style.display = 'none'; // Oculta a seção se não houver correspondência
        }
    });
}
// Função para alternar a visibilidade da senha
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('inputSenha');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
});
// Função para aplicar a máscara de CPF ou CNPJ
function mascaraDocumento(event) {
    var input = event.target;
    var valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Aplica a máscara dependendo da quantidade de caracteres
    if (valor.length <= 11) {
        // Máscara para CPF
        valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else {
        // Máscara para CNPJ
        valor = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    input.value = valor;
}

// Função para aplicar a máscara no CNPJ
function mascaraCNPJ(event) {
    var input = event.target;
    var valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Aplica a máscara para CNPJ
    if (valor.length <= 14) {
        valor = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    input.value = valor;
}

// Função para adicionar experiência profissional à lista
document.getElementById('adicionarExperiencia').addEventListener('click', function() {
    if (document.getElementById('primeiroEmprego').checked) {
        alert('Você marcou "Primeiro Emprego", então não é necessário adicionar experiência.');
        return;
    }

    const empresa = document.getElementById('empresa').value.trim();
    const funcao = document.getElementById('funcao').value.trim();
    const tempo = document.getElementById('tempo').value.trim();

    if (empresa && funcao && tempo) {
        const listaExperiencias = document.getElementById('listaExperiencias');
        
        // Cria um novo item de lista com a experiência
        const li = document.createElement('li');
        li.textContent = `${empresa} - ${funcao} (${tempo})`;

        // Adiciona à lista de experiências
        listaExperiencias.appendChild(li);

        // Limpa os campos
        document.getElementById('empresa').value = '';
        document.getElementById('funcao').value = '';
        document.getElementById('tempo').value = '';
    } else {
        alert('Por favor, preencha todos os campos de experiência.');
    }
});

// Bloqueia o campo de experiência se "Primeiro Emprego" for marcado
document.getElementById('primeiroEmprego').addEventListener('change', function() {
    const empresaInput = document.getElementById('empresa');
    const funcaoInput = document.getElementById('funcao');
    const tempoInput = document.getElementById('tempo');
    const experienciaBtn = document.getElementById('adicionarExperiencia');

    if (this.checked) {
        empresaInput.disabled = true;
        funcaoInput.disabled = true;
        tempoInput.disabled = true;
        experienciaBtn.disabled = true;
    } else {
        empresaInput.disabled = false;
        funcaoInput.disabled = false;
        tempoInput.disabled = false;
        experienciaBtn.disabled = false;
    }
});
