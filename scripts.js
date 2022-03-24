//script for searching by category
function searchBooks() {
  var a=1,input, category, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  category = document.getElementById("Journal");
  console.log("category", category.value);

  table = document.getElementById("bookTable");
  tr = table.getElementsByTagName("tr");
  console.log(tr.length);

  for (i = 0; i < tr.length; i++) {
    if (category.value == "title") td = tr[i].getElementsByTagName("td")[0];
    if (category.value == "author") td = tr[i].getElementsByTagName("td")[1];
    if (category.value == "price") td = tr[i].getElementsByTagName("td")[2];

    console.log(td);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        a = a+1;
        console.log("value of a",a)
        console.log(tr.length)
      }
    }
  }
  try {
    if (input.value == "")
      alert("Input empty, please enter valid value");
    if (a == tr.length) alert("Input value not found!");
  } catch (err) {
    alert("Issue with code");
  }
}

function resetSearchPage() {
  window.location.reload();
  return false;
}

// script for sorting character columns
function sortTableAlpha(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("bookTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
          one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
          based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

//script for sorting numeric data from the table
function sortTableNumeric(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("bookTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
          one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      console.log("Entering for loop");
      console.log(x);
      console.log(y);
      console.log(Number(x.innerHTML));
      console.log(Number(y.innerHTML));

      /*check if the two rows should switch place,
          based on the direction, asc or desc:*/
      if (dir == "asc") {
        console.log("entring asc if");
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        console.log("entring asc if");
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function sortIt() {
  //display spans and length
  let spans = document.getElementsByTagName("span");
  console.log("spans: ", spans);
  console.log("span lenghs: ", spans.length);

  var index, switching, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
    no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    /* b = list.getElementsByTagName("span");*/
    // Loop through all list-items:s
    for (index = 0; index < spans.length; index++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      console.log("In while For loop");
      console.log(spans[index].innerText.toLowerCase());
      console.log(spans[index + 1].innerText.toLowerCase());
      /* check if the next item should
        switch place with the current item: */
      /*if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {*/
      if (
        spans[index].innerText.toLowerCase() >
        spans[index + 1].innerText.toLowerCase()
      ) {
        /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark the switch as done: */
      console.log("switch true if loop");
      console.log(spans[index].innerText);
      console.log(spans[index + 1].innerText);
      console.log(spans[index + 1].innerText.parentNode);

      spans[index].parentNode.insertBefore(spans[index + 1], spans[index]);
      switching = true;
    }
  }
}


function showMessage() {
  alert("Account Created Successfully!")
  location.href="main.html"
}
function showMessageindex() {
  location.href="index.html"
}

function showMessage3() {
  alert("Book deleted successfully!");
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function showMessage1() {
alert("Book added successfully");
location.href="main.html"
}

function showMessage2() {
alert("Book updated successfully!");
location.href="main.html"
}










