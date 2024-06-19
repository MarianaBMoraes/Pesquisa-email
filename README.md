### Pesquisa de Usuário por Email - JavaScript

Este é um script simples em JavaScript que permite pesquisar um usuário por email em uma lista pré-definida de objetos.

#### Utilização:

1. **Instruções de Uso:**
   - O script inicialmente exibe a mensagem: "Qual email você quer pesquisar?".
   - Você deve digitar um email no console e pressionar Enter.

2. **Pesquisa do Email:**
   - Após receber o email digitado, o script percorre a lista de usuários pré-definida para encontrar um usuário cujo email corresponda ao email fornecido.
   - Se um usuário com o email especificado for encontrado, suas informações (nome, idade e email) são exibidas no console.
   - Caso nenhum usuário corresponda ao email digitado, o script exibe a mensagem "usuário não encontrado.".

3. **Finalização:**
   - Após exibir o resultado da pesquisa, o script finaliza automaticamente.

#### Como Executar:

Para rodar o script:

1. Certifique-se de ter o Node.js instalado no seu sistema.
2. Copie o código JavaScript para um arquivo (por exemplo, `pesquisa_usuario.js`).
3. Abra o terminal, navegue até o diretório onde o arquivo está localizado.
4. Execute `node pesquisa_usuario.js`.
5. Siga as instruções exibidas no console para interagir com o script e pesquisar um usuário pelo email.

#### Exemplo de Código:

```javascript
let usuarios = [
  {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
  },
  {
    nome: "Maria",
    idade: 20,
    email: "maria@gmail.com",
  },
];

console.log("Qual email você quer pesquisar?");

process.stdin.on("data", function (data) {
  let email = data.toString().trim();
  let usuario;
  
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      usuario = usuarios[i];
      break;
    }
  }
  
  if (usuario) {
    console.log(usuario);
  } else {
    console.log("Usuário não encontrado.");
  }
  
  process.exit();
});
```

#### Notas:

- Certifique-se de digitar o email corretamente para obter o resultado desejado.
- O script assume uma interação via terminal onde o usuário pode inserir o email para pesquisa.
- Modifique a lista `usuarios` conforme necessário, adicionando mais objetos com diferentes emails, nomes e idades.
- Personalize ou expanda o script para incluir mais funcionalidades, como pesquisas por nome ou idade.

Este script oferece uma maneira simples de encontrar informações de usuários com base no email fornecido. Experimente e adapte conforme suas necessidades! 🔍📧
