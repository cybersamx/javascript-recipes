import mongoose from 'mongoose';
import Employee from './model';

const host = 'localhost';
const db = 'test';
const user = 'user';
const password = 'password';

// --- Data model ---

const peter = new Employee({
    firstName: 'Peter',
    lastName: 'Griffin',
    age: 38,
    team: 'Operations',
});

console.log(`Instantiated employee: ${peter}`);

// --- Connect to Mongo ---

// For MongoDB version > 3.1.0, pass the appropriate options.
mongoose.connect(`mongodb://${user}:${password}@${host}/${db}`,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => {
      console.log('Successfully connected to database');
  })
  .catch((err) => {
      console.error(`Error when connecting to database: ${err}`);
      process.exit(1);
  });


// --- Save and Query from MongoDB ---

function errHandler(err, exitCode, msg) {
    mongoose.disconnect();
    console.error(`${msg}: ${err}`);
    process.exit(exitCode);
}

peter.save(function(err, model) {
    if (err) {
        errHandler(err, 2, 'Error when saving a model to database');
    }

    console.log(`Saving model:\n${model}`);

    Employee.find().exec(function(err, models) {
        if (err) {
            errHandler(err, 3, 'Error when querying the database');
        }

        console.log(`Querying all models:\n${models}`);

        Employee.deleteOne(model , function(err) {
            if (err) {
                errHandler(err, 4, 'Error when deleting a model from the database');
            }

            console.log(`Deleting model with id: ${model._id}`);
            mongoose.disconnect();
        });
    });
});
