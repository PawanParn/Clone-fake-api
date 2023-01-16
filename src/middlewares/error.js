module.exports = (err, res ,req, next ) =>{
    res.status(500).json({message : err})
}