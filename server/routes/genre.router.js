const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  let idToSQLQuery=req.params['id']
  console.log(idToSQLQuery)
  // Add query to get all genres
  const query = 
  `SELECT genres.name FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies.id = movies_genres.movie_id
  WHERE movies.id = $1;`;
  pool.query(query, [idToSQLQuery])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all Genres', err);
      res.sendStatus(500)
    })

  // res.sendStatus(500)
});

module.exports = router;