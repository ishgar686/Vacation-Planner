const getTrip = async (req, res) => {
    const trip = [
        {
            destination: 'Paris',
            startDate: '2024-08-01',
            endDate: '',
            journalEntry: 'Had a wonderful time visiting the Eiffel Tower and the Louvre.'
        }
    ];

    res.status(200).json(trip);
}

const getTripName = async (req, res) => {
    const name = req.query.name;
    
    // check if the name exists
    if (!name) {
        return res.status(400).json({ message: 'Name query parameter is required.' });
    }

    res.status(200).json({ message: `We are going to ${name}.` });
}


module.exports = { getTrip, getTripName };