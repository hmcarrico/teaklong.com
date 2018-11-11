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
    },
    search: (req, res) => {
        const db = req.app.get('db');
        let {search} = req.params;
        db.searchItem(`%${search}%`).then(items => {
            console.log(items)
            res.status(200).send(items)
        })
    },
    searchWheels: (req, res) => {
        const db = req.app.get('db');
        let {search} = req.params;
        db.search_wheels(`%${search}%`).then(items => {
            console.log(items)
            res.status(200).send(items)
        })
    },
    searchCompletes: (req, res) => {
        const db = req.app.get('db');
        let {search} = req.params;
        db.search_completes(`%${search}%`).then(items => {
            console.log(items)
            res.status(200).send(items)
        })
    },
    searchDecks: (req, res) => {
        const db = req.app.get('db');
        let {search} = req.params;
        db.search_decks(`%${search}%`).then(items => {
            console.log(items)
            res.status(200).send(items)
        })
    }
}