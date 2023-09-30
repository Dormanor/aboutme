//Dark mode toggle
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  // To enable dark mode:
document.body.classList.add('dark-mode');

// To disable dark mode:
document.body.classList.remove('dark-mode');
//image header animation
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var name = document.querySelector('.header .name');
    var img = document.querySelector('.header img');

    header.style.height = window.pageYOffset > 100 ? '50px' : '100px';
    name.style.fontSize = window.pageYOffset > 100 ? '16px' : '20px';
    img.style.height = window.pageYOffset > 100 ? '30px' : '50px';
});
//custom right click menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
// typing effect
const dynamicWords = ["I", "am", "Dormanor", "a", "17yo", "student"];
let wordIndex = 0;
let revealTimer = null;

const dynamicWordElement = document.getElementById("dynamic-word");
const closeButton = document.querySelector(".close-btn");
const showModalButton = document.querySelector(".show-modal");

function clearWord() {
    if (revealTimer) {
        clearInterval(revealTimer);
        revealTimer = null;
    }
    dynamicWordElement.textContent = "";
    wordIndex = 0; // Reset wordIndex
}

function revealWord() {
    if (wordIndex < dynamicWords.length) {
        const word = dynamicWords[wordIndex];
        const letters = word.split("");
        let index = 0;

        // Add a space before the new word if it's not the first word
        if (wordIndex > 0) {
            dynamicWordElement.textContent += " ";
        }

        revealTimer = setInterval(() => {
            if (index >= letters.length) {
                clearInterval(revealTimer);
                revealTimer = null;
                wordIndex++;
                if (wordIndex < dynamicWords.length) {
                    setTimeout(revealWord, 500);
                }
            } else {
                dynamicWordElement.textContent += letters[index];
                index++;
            }
        }, 100);
    }
}

closeButton.addEventListener("click", clearWord);
showModalButton.addEventListener("click", function() {
    if (!revealTimer) { // Only start revealing words if it's not already doing so
        revealWord();
    }
});
const section = document.querySelector("section"),
overlay = document.querySelector(".overlay"),
showBtn = document.querySelector(".show-modal"),
closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () =>
section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
section.classList.remove("active")
);
// toast
const button = document.querySelector("button"),
      toast = document.querySelector(".toast")
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");

      let timer1, timer2;

      button.addEventListener("click", () => {
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      });
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        
        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      });
      window.onload = function() {
        document.getElementById("tosty").click();
      };
// scroll transition 
window.addEventListener('scroll', function() {
  var ids = ['socials', 'languages', 'about-me'];
  
  ids.forEach(function(id) {
    var element = document.getElementById(id);
    var top = element.offsetTop;
    var bottom = top + element.offsetHeight;

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > top && scrollTop < bottom) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
});

