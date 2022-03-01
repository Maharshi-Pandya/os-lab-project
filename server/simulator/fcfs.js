// Simulator for FCFS (First Come First Serve algorithm)

// We proceed by a time step (kind of a frame of the simulation)
// Then we check the ready queue and execute the process or
// add any process into the ready queue

// 1) We initialise global time counter (currTime) and move step by step forward in time
//     - We also create variables to store the current executing Process and its start time
// 2) At each step: 
//     - We check which Process is arrived (if any) and add it to readyQueue
//     - Then if readyQueue is not empty, we check if any other process is currently executing
//     - If not, we dequeue a Process from readyQueue and let it execute
//     - We move one step forward in time and check for the current executing Process to finish
//     - If the process is finished executing, we kill it and remove it from the list
// 3) We stop the algorithm when no Process is left to execute in the original list

const Process = require("../utils/process");
const Queue = require("../utils/queue");

// Simulation time step
const timeStep = 1;
let readyQueue = new Queue();
let waitingTimes = [];


// Adds the process to ready queue
const addToReadyQueue = (proc) => {
    if(proc) {
        readyQueue.enqueue(proc);
    } 
}

// Check if any other process is executing already
const anyOtherExecuting = (processes) => {
    for(let i=0; i<processes.length; i++) {
        if(processes[i].isExecuting) {
            return true;
        }
    }

    return false;
}

// Check if Process has finished execution
const checkKillProcess = (currTime, startTime, proc) => {
    if(proc) {
        if(currTime - startTime === proc.exeTime) {
            proc.isExecuting = false;
            proc.waitTime = startTime - proc.arrTime;
            waitingTimes.push(proc.waitTime);
            // console.log(`${proc.pid} is killed...`);
        }
    }
}

// Checks which process arrived
const checkWhichArrived = (currTime, processes) => {
    for(let i=0; i<processes.length; i++) {
        // process arrived
        if(currTime === processes[i].arrTime) {
            // console.log(`${processes[i].pid} arrived`);
            addToReadyQueue(processes[i]);
        }
    }
}

// self explanatory
const removeFromList = (proc, processes) => {
    for(let i=0; i<processes.length; i++) {
        if(proc === processes[i]) {
            processes.splice(i, 1);
        }
    }
}

// Simulate
// This is the main function
const Simulate = (processes) => {
    // Step 1
    let currTime = 0;
    let currExecuting = null;       // which Process is executing currently?
    let currExecStartTime = 0;      // when did it start its execution?
    
    // Infinite loop
    while(1) {
        // Step 3
        if(processes.length <= 0) {
            console.log("Done...");
            return currTime;
        }

        // Step 2
        checkWhichArrived(currTime, processes);
        
        if(!readyQueue.isEmpty()) {
            if(!anyOtherExecuting(processes)) {
                let proc = readyQueue.dequeue();
                proc.isExecuting = true;
                currExecuting = proc;
                currExecStartTime = currTime;
                console.log(`${currExecuting.pid} started at time ${currExecStartTime}`);
            }    
        }
        // await sleep(1000);
        
        // move forward in time
        currTime += timeStep;

        checkKillProcess(currTime, currExecStartTime, currExecuting);
        if(currExecuting && !currExecuting.isExecuting) {
            removeFromList(currExecuting, processes);
        }
    }
}

// // Sleep function for debugging if necessary
// function sleep(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

// Testing
let p2 = new Process(2, "P1", 1, 3, 0);
let p1 = new Process(1, "P2", 2, 8, 0);
let p3 = new Process(3, "P3", 3, 6, 0);
let p4 = new Process(4, "P4", 5, 4, 0);
let p5 = new Process(5, "P3", 7, 2, 0);

let procs = [p1, p2, p3, p4, p5];

let t = Simulate(procs);
console.log("FCFS done at time:", t);
console.log(waitingTimes);
