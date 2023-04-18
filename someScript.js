const internes = 350;
const externes = 150;
const allStudents = 500;
let num1 = document.querySelector("div .numbers1");
let num2 = document.querySelector("div .numbers");
let count = 0;

function removeShowMore(x, names, myTarget, otherTarget, thirdTarget, parentTarget) {
  window.addEventListener("click", (event) => {
    if (
      event.target == document.querySelector(x) ||
      (names.classList.contains("showNow") && event.target == myTarget) ||
      (names.classList.contains("showNow") && event.target == otherTarget) ||
      (names.classList.contains("showNow") && event.target == thirdTarget)
    ) {
      document.querySelector(parentTarget).classList.remove("showNow");
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
document.addEventListener("DOMContentLoaded", () => {
  const names = document.querySelector(".aboutMore");
  const myTarget = document.querySelector(".about");
  const otherTarget = document.querySelector("#course");
  const thirdTarget = document.querySelector(".aboutMore");


  let informatique = document.querySelector("#myInformatique1");
  informatique.addEventListener("click", () => {
    document.querySelector(".informatiqueDetails").classList.add("showNow");
    removeShowMore("#moreInformatiques",names, myTarget, otherTarget, thirdTarget, ".informatiqueDetails");
  });

  const bioch = document.querySelector("#bioch");
  bioch.addEventListener("click", () => {
    document.querySelector(".biochemistry").classList.add("showNow");
    document.querySelector("#moreBiochem").addEventListener('click', () => {
      document.querySelector(".biochemistry").classList.remove("showNow");
    });
  });

  const PEDA = document.querySelector("#pedag");
  PEDA.addEventListener("click", () => {
    document.querySelector(".pedago").classList.add("showNow");
    document.querySelector("#morePedago").addEventListener('click', () => {
      document.querySelector(".pedago").classList.remove("showNow");
    });
  });

  const math = document.querySelector("#math");
  math.addEventListener("click", () => {
    document.querySelector(".math-physique").classList.add("showNow");
    document.querySelector("#moreMath").addEventListener('click', () => {
      document.querySelector(".math-physique").classList.remove("showNow");
    });
  });

  const lettre = document.querySelector("#myLetters");
  lettre.addEventListener("click", () => {
    document.querySelector(".lettre").classList.add("showNow");
    document.querySelector("#moreLettre").addEventListener('click', () => {
      document.querySelector(".lettre").classList.remove("showNow");
    });
  });

  const educa = document.querySelector("#edu-physique");
  educa.addEventListener("click", () => {
    document.querySelector(".education-physique").classList.add("showNow");
    document.querySelector("#moreEduca").addEventListener('click', () => {
      document.querySelector(".education-physique").classList.remove("showNow");
    });
  });

  document.querySelector("#readmoreBtn").addEventListener("click", () => {
    document.querySelector(".aboutMore").classList.add("showNow");
    
    removeShowMore("#mo",names, myTarget, otherTarget, thirdTarget, ".aboutMore");
  });
  document.querySelector("#sea-js ").blur();
  document.querySelector("#sea-js").textContent = "";
  document.querySelector("#firstBtn").addEventListener("click", () => {
    document.querySelector("#sea-js").classList.toggle("jsCodes");
    document.querySelector("#sea-js").focus();
    document.querySelector("#sea-js").textContent = "";
  });
  let scrollable = true;
  window.onscroll = function () {
    if (Math.round(window.scrollY) >= 43) {
      document.querySelector("#stic").classList.add("myNavabar");
    } else {
      document.querySelector("#stic").classList.remove("myNavabar");
    }
    if (scrollable) {
      if (isInViewport(document.querySelector(".propos"))) {
        let countNumber = setInterval(() => {
          count++;
          document.querySelector(".numbers1").textContent = count;
          document.querySelector(".numbers").textContent = count;
          document.querySelector(".numbers2").textContent = count;
          if (count >= 5000)
            setTimeout(() => {
              clearInterval(countNumber);
              document.querySelector(".numbers1").textContent = externes;
              document.querySelector(".numbers").textContent = internes;
              document.querySelector(".numbers2").textContent = allStudents;
              count = 0;
              scrollable = false;
            }, 500);
        });
      }
    }
  };
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".pro, .login-left-side", { delay: 100, origin: "left" });
sr.reveal(".wor, .infoScheppers", { delay: 100, origin: "right" });
sr.reveal(".jodd, .containing-form", { delay: 100, origin: "bottom" });
sr.reveal(".bo-sizing, .onePic", { delay: 400, origin: "top", interval: 100 });
