let chosen = 3;
let myfrendies = [{title: "osama", age:39 , avaliable: true, skills:['HTML','css']},
                  {title: "ahmed", age:25 , avaliable: false, skills:['python','django']},
                  {title: "sayed", age:33 , avaliable: true, skills:['php','laravel']}] 
let title, age, avaliable, skills;
if(chosen ==1) { 

  ({title,age, avaliable, skills:  [,lastskill]} = myfrendies[0]);
}
else if(chosen ==2) { 
  ({title, age, avaliable, skills: [,lastskill]} = myfrendies[1]);
}

else if(chosen ==3) { 
  ({title, age, avaliable, skills: [,lastskill]} = myfrendies[3]);
}
  console.log(title);
  console.log(age);
  if(avaliable)
  console.log("avaliable");
  else
  console.log('not avaliable');
  console.log(lastskill);