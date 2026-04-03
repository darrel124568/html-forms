// document.addEventListener("DOMContentLoaded", () => {  
//   // your code here 
//   const tasks = []
//   function addtask() {
//     const task = {description: null}
//     const input = document.querySelector('#new-task-description').value
//     task.description = input
//     tasks.push(task)
//   }
//   function displayTasks() {
//     const display = document.querySelector('#tasks')
//     tasks.forEach(task => {
//       const item = document.createElement('li')
//       item.textContent = task.description
//       display.append(item)
//     })
//   }
//   const btn = document.querySelector('#submit')
//   btn.addEventListener('click', (e)=> {
//     e.preventDefault()
//     addtask()
//     displayTasks()
//   })
// }
// )

  // Keep the array outside so it has global scope for our functions


document.addEventListener("DOMContentLoaded", () => {
  // Grab the elements we need from the DOM
  const tasks = [];
  const form = document.querySelector('#create-task-form');
  const display = document.querySelector('#tasks');
  const input = document.querySelector('#new-task-description');

  // 1. Listen for the 'submit' event on the form
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // 2. Stop the page from refreshing!

    addTask(input.value);   // Create the task and add it to the array
    displayTasks();         // Re-render the updated list to the screen
    
    input.value = '';       // Clear the input box for the next task
  });

  // Function to handle data logic
  function addTask(taskText) {
    // Prevent adding blank tasks
    if (taskText.trim() !== "") {
      const task = { description: taskText };
      tasks.push(task); // 3. Push the new object into our array
    }
  }

  // Function to handle DOM manipulation
  function displayTasks() {
    // Clear out the current HTML list first, otherwise, it will duplicate 
    // the whole array every time we submit a new task.
    display.innerHTML = ''; 

    // Loop through the updated array and build the list items
    tasks.forEach(task => {
      const item = document.createElement('li');
      item.textContent = task.description; // 4. Target the specific property
      display.append(item);
    });
  }
});
