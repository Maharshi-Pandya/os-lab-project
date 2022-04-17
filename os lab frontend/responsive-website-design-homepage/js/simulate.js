// Get the form data and send a post request to server

const API_URL = "http://localhost:3301";

const process_form = document.querySelector("#process_form");
const sim_form = document.querySelector("#sim_form");
const del_form = document.querySelector("#del_proc");

// To add process...
process_form.addEventListener('submit', (event) => {
    event.preventDefault();
    // form data creates key value pair
    const formData = new FormData(process_form);

    // get values and send to server
    const pid = formData.get('pid');
    const pname = formData.get('pname');
    const arr_time = parseInt(formData.get('arr_time'));
    const exe_time = parseInt(formData.get('exe_time'));

    const process = {
        pid,
        pname,
        arr_time,
        exe_time,
        priority: null,
    }

    // reset the form fields
    process_form.reset();

    fetch(API_URL + '/create', {
        method: 'POST',
        body: JSON.stringify(process),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => console.log(res));

    // alert("Form submitted!");
});

// delete all processes from database
del_form.addEventListener('submit', (event) => {
    event.preventDefault();

    // get form value
    const formData = new FormData(del_form);

    // send request to server
    const data = {
        pid: formData.get("pid")
    };

    // reset the fields
    del_form.reset();

    fetch(API_URL + "/delete", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => console.log(res));
});

// For simulating...
sim_form.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the value of algo
    const formData = new FormData(sim_form);
    const algo_name = formData.get('algo');

    // send request to server
    const data = {
        algo: algo_name
    };

    fetch(API_URL + "/simulate", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => console.log(res));
});