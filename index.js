 function takeANumber(people,newPerson){
   var peeps= people;
   var newbie =newPerson;
   var count= peeps.length + 1;
   peeps.push(newbie);
   return "Welcome, "+ newbie +". You are number "+ count.toString() +" in line.";
 }
  var count=0;
 function takeANumberNew(){
  count++;
   return `Welcome, you are number ` + count.toString() + ".";
 }
 
 function nowServing(katzDeliLine){
  var count;
  count=0;
  if (count < katzDeliLine.length ){
   var inline = katzDeliLine.shift();
   
   return "Currently serving "+ inline + ".";
  }else{
  
  return "There is nobody waiting to be served!";
  }
 }
 
 function currentLine(katzDeliLine){
    var num;
    var count=1;
    var new_katzDeliLine=[];
    for(num=0; num<katzDeliLine.length; num++){
       if (num===0){
          katzDeliLine[num]= count.toString() + ". "+ katzDeliLine[num];
        }
       if (num !== 0){
          katzDeliLine[num]=" "+count.toString() + ". "+ katzDeliLine[num]; 
        }
     
       new_katzDeliLine.push(katzDeliLine[num]);
       count= count + 1;
   
  
    if (count === katzDeliLine.length+1) {
     return "The line is currently: " + new_katzDeliLine.toString();
      }
   }
   return "The line is currently empty.";
   
 }