const { people } = require('../data.js');

const getPeople = (req, res) => {
    res.json({ people });
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, name });
};

const getPersonById = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const person = people.find((p) => p.id === idToFind);
    if (!person) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }
    res.json({ person });
};

const updatePerson = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const personIndex = people.findIndex((p) => p.id === idToFind);
    if (personIndex === -1) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people[personIndex].name = name;
    res.json({ success: true, person: people[personIndex] });
};

const deletePerson = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const personIndex = people.findIndex((p) => p.id === idToFind);
    if (personIndex === -1) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }
    people.splice(personIndex, 1);
    res.json({ success: true, message: "Person deleted" });
};

module.exports = {
    getPeople,
    addPerson,
    getPersonById,
    updatePerson,
    deletePerson
};
