const fi = require("fs");
const path = require("path");

// criar pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});
