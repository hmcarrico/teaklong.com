module.exports = {
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {type, name, price, img, description} = req.body;
        db.product_add([type, name, price, img, description]).then(item => {
            res.status(200).send(item)
        }).catch(error => {
            console.log(error)
        })
    }
}