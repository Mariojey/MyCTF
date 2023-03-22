const fs = require('fs')

let data = fs.readFileSync(__dirname + '/../data/string.txt', 'utf8');
let text = fs.readFileSync(__dirname + '/../data/flag.txt', 'utf8');

exports.check = (req, res, next) => {
    let code = req.params.code;
    let cookie_code = Math.random() * 100
    try {
        res.cookie('If_U_See_That_U_R_On_Good_Way', cookie_code.toFixed(0))
        if (code == cookie_code.toFixed(0)) {
            data.toString()
            res.status(200).send(data)
        } else {
            text.toString()
            res.status(200).send({ text })
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}