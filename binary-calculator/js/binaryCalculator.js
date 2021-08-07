'use strict';

const operation=function(input){
    let inputArray=input.split(/([+-/*])/);
    let result;
    switch(inputArray[1]){
        case "+":
            result=parseInt(inputArray[0],2)+parseInt(inputArray[2],2);
            break;
        case "-":
            result=parseInt(inputArray[0],2)-parseInt(inputArray[2],2);
            break;
        case "*":
            result=parseInt(inputArray[0],2)*parseInt(inputArray[2],2);
            break;
        case "/":
            result=Math.floor(parseInt(inputArray[0],2)/parseInt(inputArray[2],2));
            break;
        default:
            result=0;
            break;
    }
    return result.toString(2);
};

const clickHandler=function(element,outputElement){
    element.addEventListener('click',function(e){
        switch(element.innerHTML){
            case "C":
                outputElement.innerHTML="";
                break;
            case "=":
                outputElement.innerHTML=operation(outputElement.innerHTML);
                break;
            default:
                outputElement.innerHTML+=element.innerHTML;
                break;
        }
    },false);
};

let res=document.querySelector('#res');
let btn0=document.querySelector('#btn0');
let btn1=document.querySelector('#btn1');
let btnClr=document.querySelector('#btnClr');
let btnEql=document.querySelector('#btnEql');
let btnSum=document.querySelector('#btnSum');
let btnSub=document.querySelector('#btnSub');
let btnMul=document.querySelector('#btnMul');
let btnDiv=document.querySelector('#btnDiv');

clickHandler(btn0,res);
clickHandler(btn1,res);
clickHandler(btnSum,res);
clickHandler(btnSub,res);
clickHandler(btnMul,res);
clickHandler(btnDiv,res);
clickHandler(btnClr,res);
clickHandler(btnEql,res);


