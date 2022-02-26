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
        { id: 1, pname: "P1", arr_time: 0, exe_time: 1, ser_time: 3},
        { id: 2, pname: "P2", arr_time: 1, exe_time: 4, ser_time: 2},
        { id: 3, pname: "P3", arr_time: 3, exe_time: 5, ser_time: 4},        
      ]);
    });
};
