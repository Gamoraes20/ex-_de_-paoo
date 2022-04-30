/*
6. - Refaça o exercício 5 usando a construção async/await.
*/
require('dotenv').config();
const axios = require('axios').default;
const readlineSync = require('readline-sync');

async function proctemp (lat, long) {
    const response = await axios.get(process.env.WEATHER_API, {
        params: {
            lat: lat,
            lon: long,
            appid: process.env.API_KEY,
            units: process.env.UNITS
        }
    })
      
    return response.data
}


async function retorna() { 
    var opcao;

    do {
        opcao = readlineSync.question('Digite uma das opcoes\n 1- Digite Latitude e Longitude\n 2- Sair\n');
        switch (opcao) {
            case '1':   
           
                let lat = readlineSync.question('Digite a Latitude: ');
                let long = readlineSync.question('Digite a Longitude: ');
                let data = await proctemp (lat, long);
        
                console.log(`A temperatura  é: ${data.main.temp}\n`);
                break;

            case '2':
                
                console.log("Saindo");
                break;

                default:
                console.log("Digite uma opção entre 1 ou 2"); 
                break;
        }

    } while(opcao != 2)
}

retorna();