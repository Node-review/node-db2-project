
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 1111111111, make: 'Honda', model: '2018 Accord' },
        { VIN: 2222222222, make: 'Huyndai', model: '2018 Sonata' },
        { VIN: 3333333333, make: 'Toyota', model: '2018 Camry' },
        { VIN: 4444444444, make: 'Porsche', model: '718 Cayman' },
        { VIN: 5555555555, make: 'Lexus', model: '2018 LC' },
      ]);
    });
};
