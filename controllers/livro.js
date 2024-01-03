const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require('../services/livro');

function getLivros(req, res) {
  try {
    //throw new Error('O Servidor Explodiu!')
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(`Ocorreu um erro ${error.message}`);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send('ID inválido');
    }

  } catch (error) {
    res.status(500);
    res.send(`Ocorreu um erro ${error.message}`);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if(req.body.nome) {
      insereLivro(livroNovo);
      res.status(201)
      res.send('Livro inserido com sucesso');
    } else {
      res.status(422);
      res.send('O campo nome é obrigatório');
    }

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;

      modificaLivro(body, id);

      res.status(200)
      res.send('Item modificado com sucesso');
    } else {
      res.status(422);
      res.send('ID inválido');
    }

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletaLivroPorId(id);

      res.status(200)
      res.send('Livro deletado com sucesso');
    } else {
      res.status(422);
      res.send('ID inválido');
    }

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
}