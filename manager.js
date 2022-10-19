const prompt = require('prompt-sync')();
function displyMessage(){
   const tasks  = ["Welcome to your task manager Press:", 
   "1. to see all your tasks", 
   "2. to add a task", 
   "3. to delete a task",
   "4. to mark a task as done", 
   "5. to Exit the task manager"];
   for (let i = 0; i < tasks.length; i++) {
      console.log ( tasks[i]);
      
   }
}
console.log(displyMessage());
