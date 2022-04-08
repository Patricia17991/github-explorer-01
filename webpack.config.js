const path = require('path'); //o node só entende esse formato de importação usando o require.

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //agora vamos usar esse caminho usando o path
    //falando qual o arquivo que vai ser gerado com o webpack.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //instrução resolve.
    resolve: {
        extensions:['.js', '.jsx'], //array com várias extensões de arquivos, pq por padrão ele só lê o .js.
    },

    //configurando como nossa aplicação vai se comportar quando estivermos importando cada um dos tipos de arquivo.
    module: {
        //definindo propriedade rules.
        rules: [
            //array de regras
            { //um objeto p/ cada tipo de arquivo.
                //test recebe uma expressão regular para dizer se o arquivo é ou não js
                test: /\.jsx$/,

            }
        ],
    }
}; 
