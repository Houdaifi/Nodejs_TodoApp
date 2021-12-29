<template>
    <div class="flex flex-col space-y-4 items-center justify-center min-h-screen">

      <div class="flex flex-col space-y-4 bg-white shadow-lg rounded w-1/2 p-6 py-10 justify-center items-center mb-6">
          <h1 class="text-xl font-bold">Add New Task</h1>
          <form class="flex justify-center items-center w-full" @submit.prevent="CreateTask">
              <input v-model="task_title" required class="w-10/12 border focus:border-gray-200 rounded-l py-1 px-4 focus:outline-none" type="text">
              <button type="submit" class="px-3 py-2 text-white text-sm rounded-r bg-green-400">Submit</button>
          </form>
      </div>

      <div v-for="task in tasks" :key="task._id" class="flex flex-col space-y-4 bg-white shadow-lg rounded w-1/3 p-6 px-12 justify-start">
        <div class="flex justify-between items-center">
          <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-green-600" @change="ToggleCompletedTask(task._id)" :checked="task.completed">
          <p class="" :class="{'line-through' : task.completed}">{{ task.title }}</p>
          <button @click="DeleteTask(task._id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

    </div>
</template>

<script>
const API_URL = "http://localhost:3000/api/tasks";
export default {
  name: 'Tasks',
  data() {
    return {
      task_title: '',
      tasks: {}
    }
  },
  methods:{
    CreateTask(){
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({title: this.task_title}),
        headers: {
          "content-type": "application/json"
        }
      })
      .then(response => response.json())
      .then(result => {
        this.tasks.unshift(result);
        this.task_title = ''
      });
    },
    ToggleCompletedTask(task_id){
      var task = this.tasks.find(task => task._id == task_id)
      task.completed = !task.completed
      fetch(API_URL + '/' + task_id, {
        method: "PATCH",
        body: JSON.stringify(task),
        headers: {
          "content-type": "application/json"
        }
      })
    },
    DeleteTask(task_id){
      fetch(API_URL + '/' + task_id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
      }).then(() => {
        var task = this.tasks.find(task => task._id == task_id)
        this.tasks.splice(task, 1);
      })
    }
  },
  created() {
    fetch(API_URL, {
      method: "GET"
    })
      .then(response => response.json())
      .then(result => {
        this.tasks = result
      });
  },
}
</script>
