const path = require('path'); //o node só entende esse formato de importação usando o require.

module.exports = {
    entry: path.resolve(__dirname,'src', 'index.jsx'), //agora vamos usar esse caminho usando o path.
    output:{
             path: path.resolve(__dirname, 'dist'), //falando qual o arquivo que vai ser gerado com o webpack.
    }
};  //onde colocamos o arquivo inicial da nossa aplicação (isso é para o caminho receber a '/' correta de acordo com o sistema operacional).
