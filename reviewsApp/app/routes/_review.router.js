// Review API
// HTTP Verb  Route                   Description

// GET        /api/review             Get all of the reviews
// GET        /api/review/:review_id  Get a single review by recipe id

// Load the `recipe` model
import Review from '../models/review.model';

export default (app, router) => {

  // Define routes for the `recipe` API

  router.route('/review')

    // ### Get all of the `recipes`

    // Accessed at GET http://localhost:8080/api/reviews
    .get((req, res) => {
      // Use mongoose to get all recipes in the database
        Review.find({$text: {$search: res.req.query.q}}, (err, review) => {
            if(err)
                res.send(err);
            else
                res.json(review);
        });
    });

  router.route('/review/:review_id')

    // ### Get a `recipe` by ID

    // Accessed at GET http://localhost:8080/api/recipe/:recipe_id
    .get((req, res) => {

      // Use mongoose to fetch a single `recipe` by id in the database
      Recipe.findOne(req.params.review_id, (err, recipe) => {

        if(err)
          res.send(err);

        else
          res.json(recipe);
      });
    });
};
