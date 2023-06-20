

const fix = document.querySelector (".fix");
const offsetTopValue = document.documentElement.scrollHeight - window.innerHeight;


window.onscroll = function() {
    let scTop = window.scrollY;
  
    if (scTop >= offsetTopValue) {
      fix.classList.add("on");
    } else {
      fix.classList.remove("on");
    }
  };
  
  fix.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };