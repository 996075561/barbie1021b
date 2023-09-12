// // const collection = 'NEW_COLLECTION_NAME';

// //CREATE DATABASE TEST
// //USE TEST
// use("test");
// //Apagando a collection antes de inserir novos dados.
// db.cardapio.drop();

// //Código para criar uma nova collection
// db.createCollection("cardapio");

// //Código para inserir vários dados em uma collection criada anteriormente
// db.cardapio.insertMany([
//     {nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},
//     {nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
//     {nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
//     {nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
//     {nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
// ])

// //SELECT * FROM test.cardapio;

// //No mongo para selecionar vamos usar o comando find

// //devolve todos os dados da collection
// db.cardapio.find();

// //Filtrando pelo nome
// //SELECT * FROM cardapio where nome="Macarrão"; 
// db.cardapio.find({nome:"Macarrão"});

// //Para selecionar as colunas usamos a projeção
// //SELECT nome, preco FROM cardapio where nome="Macarrão"; 
// db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

// //FIND ({QUERY},{PROJEÇÃO})


// use("teretreino");
// db.dropDatabase();
// db.createCollection("treino");

// db.treino.insertOne(
//     {
//         nome:"Peito e Biceps",
//         diaSemana:"Segunda",
//         exercicios:[
//             {
//                 nome:"Supino",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Rosca Martelo",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Voador",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Rosca Scott",
//                 serie:4,
//                 repeticoes:15
//             },
            
//         ]
//     }
// )
// db.treino.insertOne(
//     {
//         nome:"Costas e Tríceps",
//         diaSemana:"Quarta",
//         exercicios:[
//             {
//                 nome:"Tríceps Polia",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Tríceps Corda",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Pull Down",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Remada Curvada",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Puxada Alta",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Remada Baixa",
//                 serie:4,
//                 repeticoes:15
//             }
//         ]
//     }
// )

// db.treino.insertOne(
//     {
//         nome:"Inferiores",
//         diaSemana:"Terca e Quinta",
//         exercicios:[
//             {
//                 nome:"Leg Press",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Agachamento",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Levantamento Terra",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Panturrilha",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Extensora ",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Abdutora",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Adutora",
//                 serie:4,
//                 repeticoes:15
//             }
//         ]
//     }
// )

// use("teretreino");
// db.treino.find({_id:ObjectId("64f744059cf1ed723fdf1117")}) /*buscar pelo id gerado*/

// use("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f744059cf1ed723fdf1117")},/*Buscando o que eu quero*/
//     {
//          $set:{
//             diaSemana:"Sexta",    /*o que é para mudar dentro do que pedi anteriormente*/
//             nome:"Peito e Biceps A"
//         } 
//     }
// ) 

// use("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f744059cf1ed723fdf1117"), "exercicios.nome":"Voador"},/*Buscando o que eu quero*/
//     {
//          $set:{
//            "exercicios.$.nome":"Pack Deck"    /*o que é para mudar dentro do que pedi anteriormente*/
            
//         } 
//     }
// ) 

// use("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f744059cf1ed723fdf1117"), "exercicios.nome":"Rosca Scott"},
//     {
//          $set:{
//            "exercicios.$.serie":5,   
//            "exercicios.$.repeticoes":12
//         } 
//     }
// ) 


use("patissier");
db.dropDatabase();
db.createCollection("cake")

db.cake.insertOne(
    {
        id:"111111111111",
        nome:"Baunilha",
        peso:5,
        preco:150.00,
        ingredientes:[
            {
                nome:"Ovos",
                quantidade:3
            },
            {
                nome:"Colher de margarina",
                quantidade:4
            },
            {
                nome:"Copos de trigo",
                quantidade:3
            },
            {
                nome:"Copos de leite",
                quantidade:1.5
            },
            {
                nome:"Copos de açucar",
                quantidade:2
            },
            {
                nome:"Colher de fermento",
                quantidade:1
            },
            {
                nome:"Colher de esencia de baunilha",
                quantidade:1
            }

        ]
    }
)
db.cake.insertOne(
    {
        id:"222222222222",
        nome:"Chocolate",
        peso:4,
        preco:100.00,
        ingredientes:[
            {
                nome:"Ovos",
                quantidade:3
            },
            {
                nome:"Colheres de margarina",
                quantidade:4
            },
            {
                nome:"Copos de trigo",
                quantidade:3
            },
            {
                nome:"Copos de leite",
                quantidade:1.5
            },
            {
                nome:"Copos de açucar",
                quantidade:2
            },
            {
                nome:"Colheres de fermento",
                quantidade:1
            },
            {
                nome:"Copos de chocolate em pó",
                quantidade:2
            }

        ]
    }
)
db.cake.insertOne(
    {
        id:"333333333333",
        nome:"Laranja",
        peso:2,
        preco:70.00,
        ingredientes:[
            {
                nome:"Ovos",
                quantidade:3
            },
            {
                nome:"Colheres de margarina",
                quantidade:4
            },
            {
                nome:"Copos de trigo",
                quantidade:3
            },
            {
                nome:"Copos de leite",
                quantidade:1.5
            },
            {
                nome:"Copos de açucar",
                quantidade:2
            },
            {
                nome:"Colheres de fermento",
                quantidade:1
            },
            {
                nome:"Colheres de esencia de laranja",
                quantidade:1
            }

        ]
    }
)

db.cake.insertOne(
    {
        id:"444444444444",
        nome:"Fuba",
        peso:2,
        preco:70.00,
        ingredientes:[
            {
                nome:"Ovos",
                quantidade:3
            },
            {
                nome:"Colheres de margarina",
                quantidade:4
            },
            {
                nome:"Copos de trigo",
                quantidade:3
            },
            {
                nome:"Copos de leite",
                quantidade:1.5
            },
            {
                nome:"Copos de açucar",
                quantidade:2
            },
            {
                nome:"Colheres de fermento",
                quantidade:1
            },
            {
                nome:"Copos de fuba",
                quantidade:1
            }

        ]
    }
    
)


//excluir o documento cake com id = 1
 use("patissier");
db.cake.deleteOne(
    {_id:ObjectId("65007fd1b8cd25c1ca186016")}
)

//listar o nome e o preço de todos os bolos

use("teretreino");
db.patissier.find().limit(0).skip(70) 

//(pesquisar) listar o nome e preço de todos os bolos como preço menor ou igual a 70