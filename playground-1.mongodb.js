use("test");
db.createCollection("contatos")

db.contatos.insertMany([
    {nome:"Paulo",telefone:9999.9999,assunto:"Quero marcar um encontro"},
    {nome:"Julia",telefone:7777.9999,assunto:"Quero marcar um encontro"},
    {nome:"Carol",telefone:8888.9999,assunto:"Quero marcar um encontro"},
    {nome:"Rafael",telefone:5555.5555,assunto:"Quero marcar um encontro"}
])

use("test");

db.createCollection("proj")

db.proj.insertMany([
    {id:1,nomeProjeto:"Inclusao digital",cargaHoraria:300},
    {id:2,nomeProjeto:"Crescendo em Tempo de Crise - Tigres Asiáticos",cargaHoraria:250},
    {id:3,nomeProjeto:"PodCast: Pode isso no IF?",cargaHoraria:"Em andamento"},
    {id:4,nomeProjeto:"Xadrez",cargaHoraria:180} 
])



