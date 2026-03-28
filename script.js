/* CONFETTI + MESSAGE */
function showMessage() {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({ particleCount: 120, spread: 160, origin: { x: 0.2, y: 0.7 } });
    confetti({ particleCount: 120, spread: 160, origin: { x: 0.8, y: 0.7 } });
  }, 300);

  alert("Happiest Birthday fanieeeee 🥹❤️ You are the best part of my life, and I mean that from my whole heart ❤️"); 
}

/* EXTRA CONFETTI BUTTON */
function extraConfetti() {
  for(let i = 0; i < 5; i++){
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { x: Math.random(), y: Math.random() }
      });
    }, i*300);
  }
  alert("meri pyaari fanieee ke liye sparkles ✨❤️");
}

/* SLIDESHOW */
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}
showSlides();

/* TYPEWRITER MESSAGE */
const text = `Happiest birthday babyyyyy 🥹 pyaari si kitten ka bday hai ?? Ik right now as you’re reading this…you prolly just found this little surprise and went like “wait…what is this?” I can already imagine that smile on your face 🥹❤️ babyyyy we really came this far ?? Dekhooo hum game me mile the ?? From a random game of Among Us to YOU becoming the most important person in my life ?? Aaj nahi reh sakte na ek doosre ke bagair ?? Yk you’re the reason my life feels so much better fateennn ?? I remember the time we met ?? We talked ?? we shared ?? We fell together and we slowly started caring more for each each other babyyy we came close in ways that are not just about talking every day but about really knowing each other…understanding each other committing to each other ?? We learned each other’s moods, silences, overthinking, fears, and softness…we learned how to hold each other when things felt heavy ?? We promised things, we messed up, we hurt each other sometimes and we fought…but even in the worst moments my heart never wanted to walk away from you ?? One promise never changed for us leaving was never an option 🥺❤️ Ik baby humse galtiya hui hai aur hum ab jaante hai ki unhe kese sahi karna haiii ?? no matter how broken things felt, we always found our way back to each other cuz we’re soulmates ?? Babyyy look at us now it feels like all that distance and those gaps that once felt so big don’t stand btw us anymore…it feels like we’re right here, choosing each other, and that makes us feel so secure ?? we’re closer, more connected, more sure about each other ?? Being w you feels like comfort, like peaceeeeee like home babyyyy you mean so much more to me than I ever know how to say ?? You’re the person I worry about, pray for, and miss even when everyone is around and I find myself smiling bcz of you ?? Fateennnn I want to be there for you on your bad days, on the days you’re tired of everything, on the days your mind won’t stop overthinking, and on all your happy, excited days too. I just want you to always feel loved, safe, and held, and to never feel like you’re facing anything alone ?? On your birthday I just want you to really feel this — how deeply you are loved, how important you are to my heart, and how thankful I am that out of everyone in this world, I get to call you mine 🥹❤️ Mai Allah se dua krta hu He protects you, comforts you, and gives you the kind of happiness and peace that stays w you even on hard days ?? Fills your hearttt w sooo much love and that every dream and every quiet dua you make finds its way to you ?? You’re my loveeeeee And no matter what happens just know…I’m not going anywhere ?? I’m choosing you always ?? In the easy days and the hard days, in every version of us I choose you ?? Meri pyaari baby ka birthday hai ?? Meri sabse pyaari baby bari ho gayi hai 🥹 hum kabhi alag nahi hoge baby ?? Happy birthday my babyyyy ?? I love you sooo muchhhhhhh you’re my everything 🥹❤️`;

let i = 0;
const speed = 40;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();