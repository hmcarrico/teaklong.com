module.exports = {
    getCompletes: (req, res) => {
        const db = req.app.get('db');
        db.get_completes().then(completes => {
            res.status(200).json(completes)
        })
    },
    getDecks: (req, res) => {
        const db = req.app.get('db');
        db.get_decks().then(decks => {
            res.status(200).json(decks)
        })
    },
    getWheels: (req, res) => {
        const db = req.app.get('db');
        db.get_wheels().then(wheels => {
            res.status(200).json(wheels)
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_all().then(completes => {
            res.status(200).json(completes)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        let {id} = req.params;
        db.get_product(id).then(item => {
            res.status(200).json(item)
        })
    }
}