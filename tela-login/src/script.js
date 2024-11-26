function logar(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de autenticação (substitua por sua lógica de autenticação)
    if (username === 'admin' && password === 'password123') {
        // Redirecionamento para a página principal
        window.location.href = "file:///C:/Users/kaue/Downloads/cria%C3%A7%C3%A3o%20do%20portif%C3%B3lio/index.html";
    } else {
        alert('Usuário ou senha inválidos');
    }
}

/* sessao dark */ 

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('btn');
    const bodyElement = document.body;

    toggleSwitch.addEventListener('change', () => {
        bodyElement.classList.toggle('dark', toggleSwitch.checked);
    });
});

/* fim do dark */ 

/* sessão formulario */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFieldsFilled = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '2px solid green';
            }
        });

        if (!allFieldsFilled) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                input.style.border = '2px solid green';
            } else {
                input.style.border = '2px solid red';
            }
        });
    });
});

/* fim formulário */
