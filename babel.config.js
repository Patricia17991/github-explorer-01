module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }] //a forma de configurar o babel é com colchetes
    ]
}
