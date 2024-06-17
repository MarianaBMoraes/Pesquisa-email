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
    if (usuarios[i].email == email) {
      usuario = usuarios[i];
    }
  }
  if (usuario) {
    console.log(usuario);
  } else {
    console.log("usuario não encontrado.");
  }
  process.exit();
});
