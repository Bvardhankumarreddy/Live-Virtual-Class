function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
    if (x=="" & y==""){
        alert("Name and Email must be filled out");
        return false;
    }
    else if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (y==""){
        alert("Email must be filled out");
        return false;
    }
}
function details(){
    var nm = myForm.name.value;
    var gndr = document.getElementsByName('gender');
    for(i = 0; i < gndr.length; i++) {
        if(gndr[i].checked){
             if(i==0){
                score = "male";
             }
             if(i==1){
                score ="female";
             }
        }
    }
    var eml = myForm.email.value;
    selectElement = document.querySelector('#courses')
    output = selectElement.value;
    var other = myForm.Remarks.value;
    //alert(name);
    alert("Name: "+nm+"\nGender:"+score+"\nEmail:"+eml+"\nCourse Required:"+output+"\nOther Requirement: "+other);
}