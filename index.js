var axios = require('axios');

exports.handler = () => {
    var retorno; 
    
    return axios.post('https://cvxcv.free.beeceptor.com', {
        teste : "Apenas um teste EHHHH DO BRASSSSSIIIILLL"
    })
    .then(f => {
        console.log('Sucesso');
        return "Tudo certo";
    });
};
