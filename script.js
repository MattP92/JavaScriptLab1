const name1 = prompt("Enter a name"); 
const name2 = prompt("Enter another name"); 
const name3 = prompt("Enter a third name"); 

if(name3.length == name2.length){
    console.log(`${name3} and ${name2} are the same length`);
    
}else if(name3.length == name1.length){
    console.log(`${name3} and ${name1} are the same length`);
    
}else if(name1.length == name3.length){
    console.log(`${name1} and ${name3} are the same length`);
    
}else if(name2.length == name3.length){
    console.log(`${name2} and ${name3} are the same length`);    
    
}else if(name3.length > name1.length){
    console.log(`${name3} has a longer name`);
    
}else if(name1.length > name2.length){
    console.log(`${name1} has a longer name`); 
    
}else if(name1.length > name3.length){
    console.log(`${name1} has a longer name`); 
    
}else if(name2.length > name1.length){
    console.log(`${name2} has a longer name`);
    
}else if(name2.length > name3.length){
    console.log(`${name2} has a longer name`); 
    
}else if(name1.length == name2.length){
    console.log(`${name1} and ${name2} are the same length`);
    
}else if(name2.length == name1.length){
    console.log(`${name2} and ${name1} are the same length`);
    
}else if(name3.length > name2.length){
    console.log(`${name3} has a longer name`);
    
}else{
    console.log('There are no other names'); 
}


