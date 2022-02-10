// Пакеты
const del = require('del')

// Удаление дириктории
const clear = () => {
    return del($.path.root)
}

module.exports = clear;