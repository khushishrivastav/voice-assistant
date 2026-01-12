const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
//start listening convert voice into text
recognition.lang="en-US";
//const x = require('child_process');
 
let btn= document.getElementById("btn");
btn.addEventListener("click",()=>
{
    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text); //convert text to speech
        window.speechSynthesis.speak(abc); //speak the text
      }
      function handleCommands(command)
      {
        if(command.includes("how r u ?"))
        { speak("i'm fine ..what about uh ?");}
        if(command.includes("what r u doing"))
        { speak("i'm listening to u");}
        if(command.includes("open youtube"))
        {
            speak("opening youtube");
            window.open("https://www.youtube.com");
        }
        else if(command.includes("open facebook"))
        {
            speak("opening facebook");
            window.open("https://www.facebook.com");
        }
        else if(command.includes("open Instagram"))
        {
            speak("opening Instagram");
            window.open("https://www.instagram.com");
        }
         else if(command.includes("open whatsapp"))
        {
            speak("opening Instagram");
            window.open("https://www.whatsapp.com");
        } 

        else if(command.includes("open notepad"))  
        {
          speak("opening notepad");
           setTimeout(()=>{ alert(" wait notepad is opening");}, 2000);
          fetch("http://localhost:3000/open-notepad");
          
        }
        else if(command.includes("open paint"))  
        {
          speak("opening mspaint");
           setTimeout(()=>{ alert(" wait mspaint is opening");}, 2000);
          fetch("http://localhost:3000/open-mspaint");
          
        }
        else if(command.includes("open calculator"))  
        {
          speak("opening calculator");
           setTimeout(()=>{ alert(" wait calculator is opening");}, 2000);
          fetch("http://localhost:3000/open-cal");
          
        }
        else if(command.includes("open microsoft word")||command.includes("open word"))  
        {
          speak("opening ms word");
           setTimeout(()=>{ alert(" wait msword is opening");}, 2000);
          fetch("http://localhost:3000/open-word");
          
        }
        else if(command.includes("open microsoft excel")||command.includes("open excel"))  
        {
          speak("opening m s excel");
           setTimeout(()=>{ alert(" wait msexcel is opening");}, 2000);
          fetch("http://localhost:3000/open-msexcel");
          
        }
        else if(commands.includes("open calculator"))
        {
          speak("opening calculator");
           setTimeout(()=>{ alert(" wait calculator is opening");}, 2000);
          fetch("http://localhost:3000/open-cal");
          
        }
        else if(commands.includes("open"))
       {
        let app= command.replace("open","")
                 .replace("can you","")
                 .replace("please","")
                 .trim();
         setTimeout(()=>{ alert(" wait ${app} is opening");}, 2000);
          fetch("http://localhost:3000/open?app=${appName}");
        });
        else if(commands.includes("open"))
       { speak("sorry i can only open notepad , Mspaint , Excel, MSword, whatsapp, instagram, youtube , facebook and calulator ");}
      }
       else 
       { speak("sorry i have not understand please speak again ");}
      }

      speak("how can i help you");
      setTimeout(() => {
        recognition.start();
      }, 2000);
      
            
recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommands(command)
  };
}
);

let speechtotext= document.getElementById("speechtotext");
let btn1= document.getElementById("btn1");
btn1.addEventListener("click", ()=>{

     speechtotext.style.display="block";
     recognition.start();
     recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      speechtotext.innerText= text;
      cleartext.style.display="block";
     }
  }
);
 let cleartext=document.getElementById("cleartext");
 cleartext.addEventListener("click" ,()=>
{ 
  speechtotext.style.display="none";
  setTimeout(
    () => {cleartext.style.display="none";}
    , 2000);
});
