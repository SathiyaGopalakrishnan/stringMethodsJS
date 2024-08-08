


//to find the length of the string
 function findStringLength(){
    const example=document.getElementById("inputString").value;
    
   const result=example.length;
   document.getElementById("output").value=result;
 }
  // addEvenListner for length button 
 const findLengthButton=document.getElementById("lengthButton");
 findLengthButton.addEventListener('click',findStringLength);

 //convert string into  uppercase
 //function for uppercaseconvertion
 function upperMessageConvert(){
    const example=document.getElementById("inputString").value;

    const result= example.toUpperCase();
    document.getElementById('output').value=result;
 }
 // addEvenListner  for uppercase button 
 const upperMessage=document.getElementById('toUpperCaseButton');
 upperMessage.addEventListener('click',upperMessageConvert);

  //convert string into Lowercase
 //function for lowercaseconvertion
 function lowerMessageConvert(){
    const example=document.getElementById("inputString").value;

    const result= example.toLowerCase();
    document.getElementById('output').value=result;
 }
 // addEvenListner for lowecase button 
 const lowerMessage=document.getElementById('toLowerCaseButton');
 lowerMessage.addEventListener('click',lowerMessageConvert);

 //repeat the  string 
 //function for repeat string
 function repeatMessageConvert(){
    const example=document.getElementById("inputString").value;

    const result= example.repeat(3);
    document.getElementById('output').value=result;
 }
 // addEvenListner for repeat button 
 const repeatMessage=document.getElementById('repeatButton');
 repeatMessage.addEventListener('click',repeatMessageConvert);

 //concat the  two strings 
 //function for concat string
 function concatMessageConvert(){
    const example=document.getElementById("inputString").value;
    const secondMessage=prompt("enter your second string");
    const result= example.concat(secondMessage);
    document.getElementById('output').value=result;
 }
 // addEvenListner for concat button 
 const concatMessages=document.getElementById('concatButton');
 concatMessages.addEventListener('click',concatMessageConvert);

 //spilit the  given strings using any spliter like * / :
 //function for split string
 function splitMessageConvert(){
    const example=document.getElementById("inputString").value;
    const secondMessage=prompt("enter your split string");
    const result= example.split(secondMessage);
    document.getElementById('output').value=result;
 }
 // addEvenListner for split button 
 const splitMessages=document.getElementById('splitButton');
 splitMessages.addEventListener('click',splitMessageConvert);


  //remove leading and trailing whitespace using trim
 //function for trim the given string
 function trimMessageConvert(){
    const example=document.getElementById("inputString").value;

    const result= example.trim(); 
    document.getElementById('output').value=result;
 }
 // addEvenListner for trim button 
 const trimMessage=document.getElementById('trimButton');
 trimMessage.addEventListener('click',trimMessageConvert);

 //slice the strings into substring using from to index value
 //function for slice string
 function sliceMessageConvert(){
    const example=document.getElementById("inputString").value;
    const firstMessage=prompt("enter your first index value");
    const secondMessage=prompt("enter your second index value");
    const result= example.slice(firstMessage,secondMessage);
    document.getElementById('output').value=result;
 }
 // addEvenListner for slice button 
 const sliceMessage=document.getElementById('sliceButton');
sliceMessage.addEventListener('click',sliceMessageConvert);

//find the index value of given strings 
 //function for finding index velue of string
 function indexMessageConvert(){
    const example=document.getElementById("inputString").value;
    const firstMessage=prompt("enter your string you want to find index");
    
    const result= example.indexOf(firstMessage);
    document.getElementById('output').value=result;
 }
 // addEvenListner for indexOf button 
 const indexMessage=document.getElementById('indexOfButton');
indexMessage.addEventListener('click',indexMessageConvert);

//find the lastindex value of given strings 
 //function for finding lastindex velue of string
 function lastIndexMessageConvert(){
    const example=document.getElementById("inputString").value;
    const firstMessage=prompt("enter your string you want to find last index value");
    
    const result= example.lastIndexOf(firstMessage);
    document.getElementById('output').value=result;
 }
 // addEvenListner for lastindexOf button 
 const lastindexMessage=document.getElementById('lastIndexOfButton');
lastindexMessage.addEventListener('click',lastIndexMessageConvert);

//replace the  given strings by new string
 //function for replace old string by new string   
 //replace for single replace replaceAll => it replace all values
 function replaceMessageConvert(){
    const example=document.getElementById("inputString").value;
    const oldMessage=prompt("enter the old string you want to replace in a input string");
    const newMessage=prompt("enter the new string you want to replace a old string");
    const result= example.replaceAll(oldMessage,newMessage);
    document.getElementById('output').value=result;
 }
 // addEvenListner for replace button 
 const replaceMessage=document.getElementById('replaceButton');
replaceMessage.addEventListener('click',replaceMessageConvert);
