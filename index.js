const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      var x;
      var od_lst = [];
      for (x in all) {
        if (all[x].dueDate < today) {
          od_lst.push(all[x]);
        }
      }
      return od_lst;
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      var x;
      var dt_lst = [];
      for (x in all) {
        if (all[x].dueDate === today) {
          dt_lst.push(all[x]);
        }
      }
      return dt_lst;
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      var x;
      var dl_lst = [];
      for (x in all) {
        if (all[x].dueDate > today) {
          dl_lst.push(all[x]);
        }
      }
      return dl_lst;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      var p;
      var displayList = []
      for (p=0;p<list.length;p++) {
        if (list[p].completed === false) {
          if (list[p].dueDate===today) {
            displayList.push(`[ ] ${list[p].title}`)
          }
          else {
            displayList.push(`[ ] ${list[p].title} ${list[p].dueDate}`)
          }
        }
        else {
          if (list[p].dueDate===today) {
            displayList.push(`[x] ${list[p].title}`)
          }
          else {
            displayList.push(`[x] ${list[p].title} ${list[p].dueDate}`)
          }          
        }
      }
      
      return displayList.join("\n");
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
