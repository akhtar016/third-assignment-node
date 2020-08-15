module.exports.root = (req, res, next) => {
    res.json({message:"This is users root controller"})
}

module.exports.about = (req, res, next) => {
    res.json({message:"This is users about controller"})
}