const getActivity = async (req, res) => {
    const activity = [
        {
            destination: 'Paris',
            activitySpot: 'Louvre Museum',
            rating: '4',
            review: 'Visiting the Louvre was an unforgettable experience!'
        }
    ];

    res.status(200).json(activity);
}

const postActivity = async (req, res) => {
    const { activity } = req.body;
    const { destination, activitySpot, rating, review } = activity;

    if (!destination || !activitySpot || !rating) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    res.status(200).json({ activity });
}

module.exports = { getActivity, postActivity };