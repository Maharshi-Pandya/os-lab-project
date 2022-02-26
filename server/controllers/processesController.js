// import the DB service
const DB = require("../services/DB");
const Process = require("../utils/process");

// Select all the processes and store in an array
exports.getAll = async (req, res) => {
    let processes = [];

    // fetch from DB
    let proArr = await DB.select().table("process");
    
    // push to the list in memory using 'Process' class
    for(let i=0; i<proArr.length; i++) {
        let p = new Process(proArr[i].id, proArr[i].pname, proArr[i].arr_time, proArr[i].exe_time, proArr[i].ser_time);
        processes.push(p);
    }

    // send response of all the processes
    res.json(processes);
}