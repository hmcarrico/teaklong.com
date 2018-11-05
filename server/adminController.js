module.exports = {
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {type, name, price, img, description} = req.body;
        db.product_add([type, name, price, img, description]).then(item => {
            res.status(200).send(item)
        }).catch(error => {
            console.log(error)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.product_delete(id).then(item => {
            res.status(200).send(`Deleted Item with id ${id}`)
        })
    },
    editProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {price} = req.body;
        db.product_edit(price, id).then(item => {
            res.status(200).send(`Edited Item price to ${price} with id ${id}`)
        })
    }
}