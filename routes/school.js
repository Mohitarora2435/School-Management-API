const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/addSchool', (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            console.error('Error inserting school:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    });
});

router.get('/listSchools', (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const query = 'SELECT id, name, address, latitude, longitude FROM schools';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching schools:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        results.forEach(school => {
            const dLat = school.latitude - userLat;
            const dLon = school.longitude - userLon;
            school.distance = Math.sqrt(dLat * dLat + dLon * dLon); 
        });

        results.sort((a, b) => a.distance - b.distance);

        res.json(results);
    });
});

module.exports = router;
