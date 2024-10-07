// Simulação de credenciais de usuário (em um sistema real, isso ficaria no servidor)
document.addEventListener('DOMContentLoaded', function() {
  // Simulação de credenciais de usuário
  const credenciais = {
    usuario: 'admin',
    senha: '12345'
  };

  // Capturar o formulário
  const form = document.getElementById('loginForm');

  // Adicionar um evento de submissão
  form.addEventListener('submit', function(event) {
    // Prevenir o envio padrão do formulário
    event.preventDefault();

    // Capturar os valores dos campos
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');

    const usuarioValue = usuarioInput.value;
    const senhaValue = senhaInput.value;

    // Limpar mensagens de erro anteriores
    document.getElementById('usuarioError').style.display = 'none';
    document.getElementById('senhaError').style.display = 'none';
    usuarioInput.classList.remove('input-error'); // Agora removendo a classe do elemento
    senhaInput.classList.remove('input-error');   // Agora removendo a classe do elemento

    // Verificar se os campos estão preenchidos
    if (usuarioValue === '' || senhaValue === '') {
      if (usuarioValue === '') {
        const usuarioError = document.getElementById('usuarioError');
        usuarioError.textContent = 'Por favor, preencha o campo de usuário.';
        usuarioError.style.display = 'block';
        usuarioInput.classList.add('input-error'); // Adicionar a classe 'input-error' ao campo de entrada
      }
      if (senhaValue === '') {
        const senhaError = document.getElementById('senhaError');
        senhaError.textContent = 'Por favor, preencha o campo de senha.';
        senhaError.style.display = 'block';
        senhaInput.classList.add('input-error'); // Adicionar a classe 'input-error' ao campo de entrada
      }
    } else if (usuarioValue !== credenciais.usuario || senhaValue !== credenciais.senha) {
      // Se o usuário ou a senha estiverem incorretos
      const usuarioError = document.getElementById('usuarioError');
      usuarioError.textContent = 'Usuário ou senha incorretos.';
      usuarioError.style.display = 'block';
    } else {
      // Se as credenciais estiverem corretas, redireciona para o menu principal
      window.location.href = 'menuprincipal.html'; // Caminho para o menu principal
    }
  });
});
