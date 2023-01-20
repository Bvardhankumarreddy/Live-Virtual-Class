function bonusCal()
{

    let x = document.getElementById('rank').value;
    let sal = parseInt(form1.salary.value);
    if(x=='A'){
        form1.bonus.value = '30%';
        let bonus = parseInt(sal*(30/100));
        let totalSal = parseInt(sal + bonus);
        form1.total.value = totalSal;
        window.open("Performance.html","","width=500,height=500");
        
    }
    else if(x=='B'){
        form1.bonus.value = '10%';
        let bonus = parseInt(sal*(10/100));
        let totalSal = parseInt(sal + bonus);
        form1.total.value = totalSal;
        window.open("Performance1.html","","width=500,height=500");
    }
    else{
        form1.bonus.value = '0%';
        let totalSal = parseInt(sal);
        form1.total.value = totalSal;
        window.open("Performance2.html","","width=500,height=500");
    }

     
}