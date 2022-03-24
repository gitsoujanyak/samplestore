function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var title=document.getElementById("title_row"+no);
 var author=document.getElementById("author_row"+no);
 var price=document.getElementById("price_row"+no);
 var year=document.getElementById("year_row"+no);
 var inventory=document.getElementById("inventory_row"+no);
	
 var title_data=title.innerHTML;
 var author_data=author.innerHTML;
 var price_data=price.innerHTML;
 var year_data=year.innerHTML;
 var inventory_data=inventory.innerHTML;
	
 title.innerHTML="<input type='text' id='name_text"+no+"' value='"+title_data+"'>";
 author.innerHTML="<input type='text' id='author_text"+no+"' value='"+author_data+"'>";
 price.innerHTML="<input type='text' id='price_text"+no+"' value='"+price_data+"'>";
 year.innerHTML="<input type='text' id='year_text"+no+"' value='"+year_data+"'>";
 inventory.innerHTML="<input type='text' id='inventory_text"+no+"' value='"+inventory_data+"'>";
}

function save_row(no)
{
 var title_val=document.getElementById("title_text"+no).value;
 var author_val=document.getElementById("author_text"+no).value;
 var price_val=document.getElementById("price_text"+no).value;
 var year_val=document.getElementById("year_text"+no).value;
 var inventory_val=document.getElementById("inventory_text"+no).value;

 document.getElementById("title_row"+no).innerHTML=title_val;
 document.getElementById("author_row"+no).innerHTML=author_val;
 document.getElementById("price_row"+no).innerHTML=price_val;
 document.getElementById("year_row"+no).innerHTML=year_val;
 document.getElementById("inventory_row"+no).innerHTML=inventory_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_title=document.getElementById("new_title").value;
 var new_author=document.getElementById("new_author").value;
 var new_price=document.getElementById("new_price").value;
 var new_year=document.getElementById("new_year").value;
 var new_inventory=document.getElementById("new_inventory").value;
	
 var table=document.getElementById("bookTable");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='title_row"+table_len+"'>"+new_title+"</td><td id='author_row"+table_len+"'>"+new_author+
 "</td><td id='price_row"+table_len+"'>"+new_price+
 "</td><td id='year_row"+table_len+"'>"+new_year+
 "</td><td id='inventory_row"+table_len+"'>"+new_inventory+
 "</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_title").value="";
 document.getElementById("new_author").value="";
 document.getElementById("new_price").value="";
 document.getElementById("new_year").value="";
 document.getElementById("new_inventory").value="";
}
