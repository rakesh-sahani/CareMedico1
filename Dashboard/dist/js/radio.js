
function check1(){
if (document.getElementById('opt1').checked) {
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option4').style.display = 'block';
    
    } else {
        document.getElementsName('option1').style.display = 'none';
            document.getElementById('option4').style.display = 'none';
    
    }

};
function check2(){
if (document.getElementById('opt2').checked) {
        document.getElementById('option2').style.display = 'block';
    } 
    if (document.getElementById('opt2').unchecked)
    {
        document.getElementById('option2').style.display = 'none';
    }

}

function check3(){
if (document.getElementById('opt3').checked) {
        document.getElementById('option3').style.display = 'block';
    } 
     if (document.getElementById('opt3').unchecked){
        document.getElementById('option3').style.display = 'none';
    }

}

