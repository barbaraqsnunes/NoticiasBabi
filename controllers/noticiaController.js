const Noticia = require('./models/Noticia');

class noticiaController {

  static async listar(req, res){
    const noticias = await Noticia.find().sort({data: -1});
    res.render('index', {noticias, admin: false});
  }

  static async listarAdm(req, res){
    const noticias = await Noticia.find().sort({data: -1});
    res.render('index', {noticias, admin: true});
  }

  static getCadastrar(req, res){
    res.render('cadastar');
  }

  static async postCadastrar(req, res){
    try{
      const{nome, descriçao, data} = req.body;
      await Noticia.create({nome, descricao, data});
      res.redirect('/adm');

      res.send('Noticia cadastrada com sucesso!');
    } catch (erro){
      res.status(404).send('erro ao cadastrar a noticia')
    }
  }

  static async getEditar(req, res){
    const noticia = await Noticia.findById(req.params.id);
    res.render('editar', {noticia});
  }

  static async postEditar(req, res){
    const {nome, descricao, data} = req.body;
    await Noticia.findByIdAndUpdate(re.params.id, {nome, descricao, data});
    res.redirect('/adm');
  }

  static async remover(req, res){
    await Noticia.findByIdAndDelete(req.params.id);
    res.redirect('/adm')
  }
}
module.exports = noticiaController;