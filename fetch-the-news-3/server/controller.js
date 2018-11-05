module.exports = {
  getTrivSet: (req, res) => {
    console.log('controller hit getTrivSet')
    req.app.get('db').get_triv_set()
    .then(set => {res.json(set);})
    .catch(error => {
        console.log('error in getTrivSet', error);
    // res.status(500).send('Something bad happened on server')
    res.status(500).json({message: 'GetTrivSet error'})
    })
  }
}
