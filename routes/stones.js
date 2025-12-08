import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let stones = [];

router.get('/', (req, res) => {
    res.json(stones);
});

router.post('/', (req, res) => {
    const stone = req.body;

    // Validate required fields
    if (!stone.name || !stone.color) {
        return res.status(400).json({ error: 'Name and color are required fields' });
    }

    const stoneWithId = { ...stone, id: uuidv4() };

    stones.push(stoneWithId);

    res.status(201).json({ message: `Stone with the name ${stone.name} added to the database!`, stone: stoneWithId });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundStone = stones.find((stone) => stone.id === id);
    
    if (!foundStone) {
        return res.status(404).json({ error: `Stone with id ${id} not found` });
    }

    res.json(foundStone);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    const stoneIndex = stones.findIndex((stone) => stone.id === id);

    if (stoneIndex === -1) {
        return res.status(404).json({ error: `Stone with id ${id} not found` });
    }

    stones = stones.filter((stone) => stone.id !== id);

    res.json({ message: `Stone with the id ${id} deleted from the database.` });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, color, type, weight, origin } = req.body;

    const stone = stones.find((stone) => stone.id === id);

    if (!stone) {
        return res.status(404).json({ error: `Stone with id ${id} not found` });
    }

    if (name) stone.name = name;
    if (color) stone.color = color;
    if (type) stone.type = type;
    if (weight) stone.weight = weight;
    if (origin) stone.origin = origin;
    
    res.json({ message: `Stone with the id ${id} has been updated.`, stone });

});

export default router;