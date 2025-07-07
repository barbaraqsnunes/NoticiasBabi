const express = require('express');
const noticia = require('./routes/noticia');
const Noticia = require('/models/Noticia');
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
require('dotenv/config');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);


const noticia1 = new noticia({
  nome: 'Primeira Notícia',
  descricao: 'Aqui está a primeira notícia como teste para mostrar',
  data: '24/06/25'
});
noticia1.save();

const noticia2 = new noticia({
  nome: 'Perdidos na ilha',
  descricao: 'um jovem britânico perdido na Ilha Deserta, em Faro, foi resgatado pela Polícia Marítima. Além disso, três homens foram resgatados na Micronésia após escreverem "SOS" na areia, chamando a atenção de um avião da Guarda Costeira americana',
  data: '23/11/24'
});
noticia2.save();

const noticia3 = new noticia({
  nome: 'SOS na areia',
  descricao:'Na Micronésia, três homens foram resgatados após escreverem um grande sinal de "SOS" na areia com folhas de palmeira, chamando a atenção de um avião da Guarda Costeira dos EUA. Eles ficaram perdidos na ilha por quase três dias depois que sua embarcação foi atingida por uma onda.',
  data:'06/08/20'
})
noticia3.save();


const noticia = require('./routes/noticia');
app.use(noticia);


app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(process.env.PORT, function(){
  console.log('Rodando...');
});
