/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('process')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('process').insert([
        { id: 1, arrTime: 0, exeTime: 1, serTime: 3},
        { id: 2, arrTime: 1, exeTime: 4, serTime: 2},
        { id: 3, arrTime: 3, exeTime: 5, serTime: 4},        
      ]);
    });
};
