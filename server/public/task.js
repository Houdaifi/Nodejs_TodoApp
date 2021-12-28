const {axios} = require('axios');

async function AddTask(){
    try {
        alert('nice')
        await axios.post('/api/tasks', {title: document.getElementById('new_task_title').value})
    } catch (error) {
        console.log(error.message);
    }
}