
function yearCalculator(){
    const sb = document.getElementById('entry');
        const selectedValues = [].filter
            .call(sb.options, option => option.selected)
            .map(option => option.value);
        // alert(selectedValues);
  
    const d = new Date();
    let currentYear = d.getFullYear();
    let currentMonth = d.getMonth();
    let currentDay = d.getDay();
        if(selectedValues =='age'){
            document.getElementById('dob').style.direction="none";      
        const age=document.getElementById("age").value ;
        const yob=currentYear-age;
        document.getElementById("yobmessage").innerHTML=`Your year of birth is ${yob}`;
    }else if(selectedValues=='yob'){
        const yob=document.getElementById("yob").value ;
        const mob=document.getElementById("mob").value ;
        const dob=document.getElementById("dob").value ;
        console.log(currentDay);
        let year=currentYear-parseInt(yob);
        let month=currentMonth-parseInt(mob);
        let day=currentDay-parseInt(dob);
        const age=`Your age is ${year} years ${month} months and ${day} days`;
        document.getElementById("yobmessage").innerHTML=`${age}`;
    }

}
