
function Result(){
    greet();
    var math = frm1.math.value;
    var eng = frm1.eng.value;
    var comp = frm1.comp.value;
    var tot = parseInt(math)+parseInt(eng)+parseInt(comp);
    console.log(tot);
    frm1.tot.value = tot;
    frm1.per.value = (parseInt(tot)/300)*100;
    frm1.max.value = Math.max(parseInt(math),parseInt(eng),parseInt(comp));
    frm1.min.value = Math.min(parseInt(math),parseInt(eng),parseInt(comp));
     
}

function greet(){
    alert(frm1.t1.value+" hello")
}