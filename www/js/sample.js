//https://free.currencyconverterapi.com/api/v6/convert?apiKey=b719dfa36c8117d5b03b&q=USD_INR&compact=y
document.getElementById('outputBlock').hidden=true;
document.getElementById('convert').addEventListener('click',()=>{
    let inputText = Number($('#input').val());
    if(!Number.isInteger(inputText))
    {
        alert('Only Integers allowed');
        return;
    }
    let outputText;
    console.log(inputText);

    $.ajax({url: "https://free.currencyconverterapi.com/api/v6/convert?apiKey=b719dfa36c8117d5b03b&q=USD_INR&compact=y", success: function(result){
        console.log(result['USD_INR'].val);
        outputText= inputText*result['USD_INR'].val;
        document.getElementById('output').innerHTML=outputText.toFixed(2);
        document.getElementById('outputBlock').hidden=false;


      }});
});
