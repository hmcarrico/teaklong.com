module.exports = {
    createOrder: (req,res) => {
        const db = req.app.get('db');
        const {shipping_address, user_id} = req.body;
        db.order_create([shipping_address, user_id]).then(order => {
            res.status(200).json(order)
        })
    },
    createLine: (req,res) => {
        const db = req.app.get('db');
        const {order_id, product_id} = req.body;
        db.order_line([order_id, product_id]).then(order => {
            res.status(200).json(order)
        })
        req.session.cart = [];
    },
    orderHistory: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.order_history_get([id]).then(history => {
            res.status(200).send(history)
        })
    }
}