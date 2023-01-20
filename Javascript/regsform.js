function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["desg"].value;
    if (x=="" & y==""){
        alert("Name and Designation must be filled out");
        return false;
    }
    else if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (y==""){
        alert("Designation must be filled out");
        return false;
    }
}