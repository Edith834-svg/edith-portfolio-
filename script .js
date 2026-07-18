function addTask() {
    let taskInput =
document.getElementById("taskInput
");
    let taskList=
document.getElementById("taskList"
);

    let task = taskInput.value;
  
    if (task === "") {
	    alert("please enter a 
task");
        return;
    }		
 
    let newTask =
document.createElement("li");
    newTask.textContent = task;
  
    taskList.appendChild(newTask);
  
    taskInput.value = "";
}
  
  const nameText = "Edith Okonkwo
  Chinenye";
  const welcomeText = "Welcome to my
  personal portfolio website.";.
  
  let i = 0;
  let j = 0;
  
  function typeName() {
      if (i < nameText.length) {
	  
  document.getElementById("name").in
  nerHTML += nameText.charAt(i);
          i++;
          setTimeout(typeName, 100);
      } else {
          typeWelcome();
      }
 }
 
 function typeWelcome () {
     if (j < welcomeText. length) {

 document.getElementById("welcome")
 .innerHTML +=
 welcomeText.charAt(j);
         j++;
         setTimeout(typewelcome, 50);
     }
 }

 window.onload = typeName; 
  
  
  
  