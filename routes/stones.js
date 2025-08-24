import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let stones = [];

router.get('/', (req, res) => {
    res.json(stones);
});

router.post('/', (req, res) => {
    const stone = req.body;

    const  stoneId = uuidv4();

    const stoneWithId = { ...stone, id: uuidv4() }

    stones.push({ ...stone, id: uuidv4() });

    res.send(`Stone with the name ${stone.name} added to the database! `);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundStone = stones.find((stone) => stone.id === id);
    
    res.send(foundStone);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    stones = stones.filter((stone) => stone.id != id);

    res.send(`Stone with the id ${id} deleted from the database. `);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, color, type, weight, origin } = req.body;

    const stone = stones.find((stone) => stone.id === id);

    if(name) stone.name = name;
    if(color) stone.color = color;
    if(type) stone.type = type;
    if(weight) stone.weight = weight;
    if(origin) stone.origin = origin;
    
    res.send(`User with the id ${id} has been updated. `);

})

export default router;