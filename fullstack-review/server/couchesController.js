module.exports = {
    getCouches: (req, res) => {
        req.app.get('db').get_couches().then(couches => {
            res.json(couches);
        }).catch(error => {
            console.log('error in getCouches', error);
        // res.status(500).send('Something bad happened on server')
        res.status(500).json({message: 'blah blah'})
        })
    },
    postCouch: (req,res) => {
        req.app.get('db').create_couch({
            user_id: req.session.user.id,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
        }).then(couches => {
            res.json(couches[0])
        }).catch(error => {
            console.log('error in postCouch', error);
        res.status(500).json({message: 'blah blah blah'})
        })
    }
}