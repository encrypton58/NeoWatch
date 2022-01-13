const fs = require('fs')
const absolutePath = "C:/Users/marc/Desktop/dw_loc/public/Files"

function seeFilesOfDir(req, res) {
    let dir = req.query.dir
    if (dir) {
        let files = fs.readdirSync(`${absolutePath}/${dir}`)
        let filesInfo = []
        for (let i = 0; i < files.length; i++) {
            let f = fs.statSync(`${absolutePath}/${dir}/${files[i]}`)
            filesInfo.push(f.ctime.toString().split('T')[0])
        }
        res.render('showFiles.pug', { files: files, dir: dir, info: filesInfo })
    } else {
        res.send("No found carpet")
    }
}

function getFile(req, res) {
    let nameFile = req.query.name
    let dir = req.query.dir
    if (nameFile) {
        let file = nameFile
        console.log(file)
        res.render('showFile.pug', { file })
            //res.sendFile(file)
    } else {
        res.send("file not found")
    }
}


module.exports = {
    seeFilesOfDir,
    getFile
}