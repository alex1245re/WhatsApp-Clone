const socket = io();

const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const statusInput = document.getElementById('status');

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const contadorusuarios = document.getElementById("contadorusuarios");
var currentUser = null;
var count = 0;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedAvatar = document.querySelector('input[name="avatar"]:checked').value;

    currentUser = {
        name: usernameInput.value,
        status: statusInput.value,
        avatar: selectedAvatar
    };

    socket.emit('join', currentUser);

    loginContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value && currentUser) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on("usuarios conectados", (count) => {
    contadorusuarios.innerHTML = `Usuarios conectados: ${count}`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value && currentUser) {
    socket.emit('chat message', input.value);
    input.value = '';
    }
});

socket.on('chat message', (data) => {
    const item = document.createElement('li');
    if (data.system) {
        item.classList.add('system-msg');
        item.textContent = data.text;
    } else {
        const autenticado = currentUser && data.user.name === currentUser.name;
        if(autenticado) {
            item.classList.add('my-message');
        }

        item.innerHTML = `
            <div class="avatar">${data.user.avatar}</div>
            <div class="msg-content">
                <div class="msg-header">
                    <strong>${data.user.name}</strong> 
                    <span>${data.user.status}</span>
                </div>
                <div class="msg-text">${data.text}</div>
            </div>
        `;
    }
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
