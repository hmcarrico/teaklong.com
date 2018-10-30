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
}