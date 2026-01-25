const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
//start listening user voice and  convert user voice into text
recognition.lang="en-US";
 
let btn= document.getElementById("btn");
let voice=document.getElementById("voice");
let wished=false;
btn.addEventListener("click",()=>
{function speak(text) {
  const abc = new SpeechSynthesisUtterance(text); //convert text to speech and voice

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


      else if(command.includes("what are you doing")||command.includes("what r u doing "))
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

/*let speechtotext= document.getElementById("speechtotext");
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
}); */

 var aichatarea=document.getElementById("aichatarea");
let user= {data :null};

const api_url="https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" ;
const a1= "AIzaSyA3VZ";
const b2= "-EsZr6tBAvmtdbFv6";
const c3=" upPlZad75tJc";

function generate()
{ return a1+b2+c3;}

key=generate();

async function generateResponse(aichatbox)
{  

 
  let requestOption= { method : "POST" ,
                      
                  headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": key
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text:aichatbox
            }
          ]
        }
      ]
    })
  };
 

  try {
  
    let response = await fetch(api_url, requestOption);
    
    let data = await response.json();
    
  console.log("full response" , data);
   if (!data.candidates) {
      return "API limit reached,try again after sometime.";
    }

   let aitext= data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim(); 
 return aitext;
}

 catch(error) {
    console.error("Error:", error);
  }

}

 

var chatcont=document.getElementById("chat-container");
  var userchatarea=document.getElementById("usr-chatarea");
  var parentuserchatarea=document.getElementById("user-chatarea"); 
  var aichatarea=document.getElementById("aichatareaa");
  var usrbtn1= document.getElementById("user-btn1");

   var text=document.getElementById("prompt").value;
  var value=true;
  

  
  usrbtn1.addEventListener("click",async()=>
 {   //chatcont.style.backgroundColor="rgba(0,0,0,0.8)";
    usrbtn1.disabled = true;
   setTimeout(()=>{ usrbtn1.disabled = false; },8000);


 /*  function button()
{ if(text==="")
{usrbtn1.disabled=true;}
else
{ usrbtn1.disabled=false;} }

button(); */

 var text= document.getElementById("prompt").value;
 if(text=="")
{return ;}
 user.data = text;
 let aireply= await generateResponse(text);

 if(value)
  { chatcont.style.display="block";
   userchatarea.innerText= text;
   document.getElementById("prompt").value="";
  usrbtn1.disabled=true; 
  aichatarea.innerText=aireply;
     usrbtn1.disabled=false;

  value=false;
  }
 else

{
    var img1= document.createElement("img");
   img1.src="user.png";
   img1.style.width="30px";
 

  var div= document.createElement("div");
  var textnode=document.createTextNode(text);
  div.appendChild(img1);
  div.appendChild(textnode);
  chatcont.appendChild(div);
  chatcont.style.display="block";
  document.getElementById("prompt").value=""; 
   div.style.backgroundColor= "black";
//div.style.backgroundColor= "#87ceeb"
  div.style.color= "white";
  div.style.marginLeft=  "auto";
  div.style.fontSize= "20px";
  div.style.width= "50%";
  div.style.borderRadius= "20px";
  div.style.wordWrap=  "break-word";
  div.style.gap="20px";
   //value=false;
 
    var img2= document.createElement("img");
   img2.src="a13.image.png";
   
   img2.style.width="30px";
   
   usrbtn1.disabled=true;
   var div1= document.createElement("div");
  var textnode1=document.createTextNode(aireply);
  div1.appendChild(img2);
  div1.appendChild(textnode1);
  chatcont.appendChild(div1);
   usrbtn1.disabled=false;
  chatcont.style.display="block";
 // alert(aireply);
  
   div1.style.backgroundColor= "rgba(0,0,0,0.20)";
   // div1.style.backgroundColor= "#ffb6c1";
    div1.style.color= "white";
    div1.style.display= "flex";
   div1.style.marginRight="auto";
   div1.style.fontSize="20px";
   div1.style.borderRadius="20px";
   div1.style.width="50%";
   div1.style.gap="20px";
   
    

}

   });







