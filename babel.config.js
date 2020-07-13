const newLocal = 'entry';
module.exports = {
    plugins: ['lodash'],
    presets: [
        ['@vue/app', { useBuiltIns: newLocal }]
    ]
}