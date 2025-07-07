const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

router.get('/', noticiaController.listar)
router.get('/adm', noticiaController.listarAdm);
router.get('/adm/cadastrar', noticiaController.getCadastrar);
router.post('/adm/cadastar', noticiaController.postCadastrar);
router.get('/adm/editar/:id', noticiaController.getEditar);
router.post('/adm/editar/:id', noticiaController.postEditar);
router.get('/adm/remover/:id', noticiaController.remover);

module.exports = router;