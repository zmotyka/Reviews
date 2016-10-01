
// # Recipe Model

// Note: MongoDB will autogenerate an _id for each Recipe object created

// Grab the Mongoose module
import mongoose from 'mongoose';
import textSearch from 'mongoose-text-search';

// Create a `schema` for the `Todo` object
let scrapeResultsSchema = new mongoose.Schema({ 
    rating: { type: Number},
    src: { type: String},
    url: { type : String } 
});
let reviewSchema = new mongoose.Schema({
    name: { type : String },
    scrapeResults: [scrapeResultsSchema]
});

// give our schema text search capabilities
reviewSchema.plugin(textSearch);

reviewSchema.index({ name: 'text' });


// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model('Review', reviewSchema);
