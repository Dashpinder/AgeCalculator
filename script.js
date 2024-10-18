
let ageBtn= document.getElementById("ageBtn");

ageBtn.addEventListener("click", function() {
  let inputDate= document.getElementById("inputDate").value;
  let results= document.getElementById("results");

  if(!inputDate){
    alert("Please enter a value");
    return;
  }

  let today= new Date();
  let birthDate= new Date(inputDate);

  let ageYear= today.getFullYear()- birthDate.getFullYear();
  let agemonth= today.getMonth() - birthDate.getMonth();
  let ageDay= today.getDate()- birthDate.getDate();
  
  if(agemonth < 0 ||(agemonth === 0 && ageDay < 0)) {
    ageYear--;
  }
  
 results.innerHTML= `Your age is ${ageYear}`;
});


















