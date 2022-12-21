
function yearCalculator(){
    const age=document.getElementById("age").value ;
    const d = new Date();
    let year = d.getFullYear();
    const yob=year-age;
    const p=document.createElement('p');
    p.innerHTML=yob;
    document.getElementById("yearCalculator").append(p);

}