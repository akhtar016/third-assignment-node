module.exports.root = (req, res, next) => {
    res.json({message: 'This is product controller root'})
}


module.exports.about = (req, res, next) => {
    res.json({message: 'This is product about controller'})
}