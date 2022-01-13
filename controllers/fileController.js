const fs = require('fs')

const getDirs = () => {
    const dir = fs.readdirSync("C:/Users/marc/Desktop/dw_loc/public/Files")
    const files = []
    dir.forEach(value => files.push(value))
    return files
}

module.exports = getDirs