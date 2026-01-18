const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
//start listening convert voice into text
recognition.lang="en-US";
//const x = require('child_process');
 
let btn= document.getElementById("btn");
let voice=document.getElementById("voice");
let wished=false;
btn.addEventListener("click",()=>
{function speak(text) {
  const abc = new SpeechSynthesisUtterance(text);

  abc.lang="hi-GB";
  abc.volume=1;
  abc.pitch = 1;
  abc.rate = 1;

  window.speechSynthesis.speak(abc);
}

      function handleCommands(command)
      {
       btn.style.display="flex"; 
       voice.style.display="none";

         if(command.includes("who are you")||command.includes("who r u ")||command.includes("hu r u "))
{ speak("i'm your virtual assistant");}

   else if(command.includes("how are you")||command.includes("how r u "))
{ speak("i'm good , what about you ");}

      else if(command.includes("what you can do")||command.includes("what u can do "))
{speak("i can open apps and do can do any task");}

       else if(command.includes("who developed you")||command.includes("who made you"))
{ speak("miss khushi shrivastav"); }

else if(command.includes("open browser")||command.includes("open chrome")||command.includes("open google"))
        {
            speak("opening google");
            window.open("https://www.google.com/");
        }
else if(command.includes("date"))
{ let date= new Date().toLocaleDateString();
  speak(date);
}
else if(command.includes("time"))
{ let time= new Date().toLocaleTimeString();
 
  speak(time);
}


      else  if(command.includes("what are you doing")||command.includes("what r u doing "))
        { speak("i'm listening to u");}
     else if(command.includes("open youtube"))
        {
            speak("opening youtube");
            window.open("https://www.youtube.com");
        }
        else if(command.includes("open facebook"))
        {
            speak("opening facebook");
            window.open("https://www.facebook.com");
        }
        else if(command.includes("open instagram"))
        {
            speak("opening instagram");
            window.open("https://www.instagram.com");
        }
         else if(command.includes("open whatsapp"))
        {
            speak("opening whatsapp");
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
        else if(command.includes("open calculator"))
        {
          speak("opening calculator");
           setTimeout(()=>{ alert(" wait calculator is opening");}, 2000);
          fetch("http://localhost:3000/open-cal");
          
        }
      //  else if(commands.includes("open"))
       //{
       // let app= command.replace("open","")
       //          .replace("can you","")
        //         .replace("please","")
        //         .trim();
      //   setTimeout(()=>{ alert(" wait ${app} is opening");}, 2000);
       //   fetch("http://localhost:3000/open?app=${appName}");
      //  }
       // else if(command.includes("open"))
    //   { speak("sorry i can only open notepad , Mspaint , Excel, MSword, whatsapp, instagram, youtube , facebook and calulator ");}
      
       else 
       { speak(`this is what i found on internet regarding ${command}`);
         window.open(`https://www.google.com/search?q=${command}`);
} }
    
      if(!wished)
{
      let day= new Date();
      let hours= day.getHours();
     if(hours>=0 && hours<12)
       {
        speak("good morning , how can i help you");
       }
     else if(hours>=12 && hours<17)
       {
        speak("good afternoon , how can i help you");
       }
    else if(hours>=17 && hours<=19)
       {
        speak("good evening, How can i help you ");
       }
     else if(hours>19 && hours<=24)
       {
        speak("good evening, How can i help you ");
       }
       wished= true;
      
}
      setTimeout(() => {
        recognition.start();
         btn.style.display="none";
         voice.style.display="block";
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
