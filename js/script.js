window.onload = function()
{
    var calculator = document.getElementById("calculator");
    var screen = document.getElementById("screen");
    var result = document.getElementById("result");
    var minus = document.getElementById("minus");
    
    
    for(var i = 0; i < calculator.buttons.length; i++)
    {
        calculator.buttons[i].onclick = function()
        {
            screen.value += this.value; 
        }
    }
    
    for(var i = 0; i < calculator.operation.length; i++)
    {
        calculator.operation[i].onclick = function()
        {
            screen.value += this.value;

            if(this.id === "reset")
            {
                screen.value = "";  
                location.reload();
            }
            
            if(this.id === "sum")
            {
                result.onclick = function()
                {
                    operation("sum");
                }
            }
            
            if(this.id === "multiply")
            {
                minus.removeEventListener("click",minusOnClick);
                minus.removeEventListener("dblclick",minusDoubleOnClick);
                result.onclick = function()
                {
                    operation("multiply");
                }
            }

            if(this.id === "division")
            {
                minus.removeEventListener("click",minusOnClick);
                minus.removeEventListener("dblclick",minusDoubleOnClick);
                result.onclick = function()
                {
                    operation("division");
                }        
            }
        }
    }
    
    function operation(evt)
    {
        var number1 = screen.value.match(/^[+-]?[0-9.?]{1,}/g);
        var number2 = screen.value.match(/[+-]?[0-9.?]{1,}/g);
        number2.shift();
        
        if(evt === "sum")
        {
            screen.value = Number(number1) + Number(number2);
        }
        else if(evt === "division")
        {
            if(Number(number1) == 0 || Number(number2) == 0)
            {
                screen.value = "Errrrrrrrrrrr";
            }
            
            else if(/[.]/.test(screen.value) === true)
                screen.value = (Number(number1) / Number(number2)).toFixed(2);
            
            else
                screen.value = Number(number1) / Number(number2);
        }
        else if(evt === "multiply")
        {
            if(/[.]/.test(screen.value) === true)
                screen.value = (Number(number1) * Number(number2)).toFixed(2);
            
            else
                screen.value = Number(number1) * Number(number2);
        }
        else
            screen.value = "Error";
        
    }
    
    
    function minusOnClick()
    {
        result.onclick = function()
        {
            var number1 = screen.value.match(/^[+-]?[0-9.?]{1,}/g);
            var number2 = screen.value.match(/[+-]?[0-9.?]{1,}/g);
            number2.shift();
            screen.value = Number(number1) + Number(number2);
        }
    }
    
    function minusDoubleOnClick()
    {
         result.onclick = function()
        {
            var number1 = screen.value.match(/^[+-]?[0-9.?]{1,}/g);
            var number2 = screen.value.match(/[+-]?[0-9.?]{1,}/g);
            number2.shift();
            screen.value = Number(number1) - Number(number2);
        }
    }
    
    minus.addEventListener("click",minusOnClick);
    minus.addEventListener("dblclick", minusDoubleOnClick);
    
    document.onkeyup = function(e)
    {
        if(e.keyCode == 96 || e.keyCode == 48)
            screen.value += 0;
        if(e.keyCode == 97 || e.keyCode == 49)
            screen.value += 1;
        if(e.keyCode == 98)
            screen.value += 2;
        if(e.keyCode == 99)
            screen.value += 3;
        if(e.keyCode == 100)
            screen.value += 4;
        if(e.keyCode == 101)
            screen.value += 5;
        if(e.keyCode == 102)
            screen.value += 6;
        if(e.keyCode == 103)
            screen.value += 7;
        if(e.keyCode == 104)
            screen.value += 8;
        if(e.keyCode == 105)
            screen.value += 9;
        if(e.keyCode == 107)
            screen.value += "+";
        if(e.keyCode == 109)
            screen.value += "-";
        if(e.keyCode == 106)
            screen.value += "*";
        if(e.keyCode == 111)
            screen.value += "/";
        if(e.keyCode == 110)
           screen.value += ".";
        if(e.keyCode == 8)
        {
            screen.value = "";
            location.reload();
        }
        
        if(e.keyCode === 13 && /[+]/.test(screen.value) === true)
            operation("sum");
        if(e.keyCode === 13 && /[*]/.test(screen.value) == true)
            operation("multiply");
        if(e.keyCode === 13 && /[/]/.test(screen.value) == true)
            operation("division");
        
        if(e.keyCode === 13 && /[-]/.test(screen.value) == true)
        {
            if(e.keyCode === 13 && /[-][-]/.test(screen.value) == true)
            {
                var number1 = screen.value.match(/^[+-]?[0-9.?]{1,}/g);
                var number2 = screen.value.match(/[+-]?[0-9.?]{1,}/g);
                number2.shift();
                screen.value = Number(number1) - Number(number2);        
            }
            else
            {
                var number1 = screen.value.match(/^[+-]?[0-9.?]{1,}/g);
                var number2 = screen.value.match(/[+-]?[0-9.?]{1,}/g);
                number2.shift();
                screen.value = Number(number1) + Number(number2); 
            }    
        }
    }

};