var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

function claci(){

    var value = this.getAttribute('data-value');
    var text = display.textContent.trim();

    if( value=='+' || value=='-' || value=='*' || value=='/' )
    {
        operand1 = parseFloat(text);
        operator = value;
        display.textContent = "";
    }
    else if(value=='ac')
    {
        display.textContent = "";
    }
    else if(value=='sign')
    {
        operand1 = parseFloat(text);
        operand1 *= -1;
        display.textContent = operand1;
    }
    else if(value=='.')
    {
        if(text.length && !text.includes("."))
        {
            display.textContent  = text+'.';
        }
    }
    else if(value=='%')
    {
        operand1 = parseFloat(text);
        operand1 /= 100;
        display.textContent = operand1;
    }
    else if(value=="=")
    {
        operand2 = parseFloat(text);
        var result = eval(operand1 + ' ' + operator + ' ' + operand2);
        
            display.textContent = result;
            operand1 = 0;
            operand2 = null;
            operator = null;
        
    }
    else{
        display.textContent += value;
        
    }
}


for(var i=0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click',claci);
}
