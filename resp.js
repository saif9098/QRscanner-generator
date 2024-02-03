function domReady(fn){
    if(document.readyState==="complete"||document.readyState==="interactive"){
        setTimeout(fn,1)
    }else{
        document.addEventListener("DOMContentLoaded",fn)
    }

}
domReady(function(){
    let myqr=document.getElementById('your-qr-result')
    let lastResult,countResults = 0;
    
    //if qr found
    function onScanSuccess(decodeText,decodeResult){
        if(decodeText !==lastResult){
            ++countResults;
            lastResult=decodeText;

            //alert qr here
            alert("Your QR is :"+decodeText,decodeResult)
            myqr.innerHTML = `Scanned ${countResults}:<a href="${decodeText}">${decodeText}</a>`
        }
    }
    //last render your qr camera
    let htmlScanner =new Html5QrcodeScanner("my-qr-reader",{fps:10,qrbox:210})
    htmlScanner.render(onScanSuccess)
})

let qrcode=document.getElementById('qrcode')
let generate_button =document.getElementById('generate_qr')
let get_input =document.getElementById('input')

generate_button.addEventListener('click',()=>{

    let url =`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${get_input.value}`
    qrcode.src=url;
    
})

let home = document.getElementById('home-form');
let scanner = document.getElementById('scanner-form');
let generator = document.getElementById('generator-form')
let selector = document.getElementById('QR')
let back_home = document.getElementsByClassName('backhome');

function change_page(){
   let val = selector.value;
    if(val=='QR scanner'){
        
        home.style.setProperty("display","none")
        scanner.style.setProperty("display","grid")
        
    }
    else{
        home.style.setProperty("display","none")
        generator.style.setProperty("display","grid")
    }
}

function backhomepage(){
    home.style.setProperty("display","grid")
    scanner.style.setProperty("display","none")
    generator.style.setProperty("display","none")
}


