
// Working of a number to displayNumber
function displayNumber(num)
{
    result.value+=num;
}


// working of AC 


function clearbox()
{
    result.value="";
}

// evaluate expression 
function evaluateexp()
{
    // method 1

    // exp=result.value;
    // output=eval(exp);
    // result.value=output;

    // method 2
    result.value=eval(result.value)
}



// remove one element 

function removelast()
{
    currentitem=result.value
    result.value=currentitem.slice(0,-1)
}