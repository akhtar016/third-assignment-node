module.exports.firstMiddleWare = (req, res, next) => {
    console.log('I need to execute first for all.')
    next()
}

module.exports.secondtMiddleWare = (req, res, next) => {
    console.log('This is second middleware')
    next()
}

module.exports.thirdMiddleWare = (req, res, next) => {
    console.log('This is third middleware')
    next()
}

module.exports.root = (req, res, next) => {
        res.json({message:'This is app controller!'})
}

module.exports.about = (req, res, next) => {
    res.json({message:'This is root about controller.'})
}