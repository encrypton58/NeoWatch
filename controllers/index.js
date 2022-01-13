const getDirs = require('./fileController')

function sendHome(req, res) {
    const dirs = getDirs()
    res.render('index.pug', { dirs })

}


module.exports = sendHome;