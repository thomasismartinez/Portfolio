// dropdown menu control
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// remove 
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// switch dropdown label between hamburger and x icon
function hamburgerx() {
  var headLinkText = document.getElementById("headLink").innerHTML
    if (headLinkText.substring(headLinkText.length-1) === "≡") {
      document.getElementById("headLink").innerHTML = headLinkText.substring(0, headLinkText.length-1) + "×";
      document.getElementById("headLink").style.backgroundColor = "black";
      hamburger = false;
    }
    else {
      document.getElementById("headLink").innerHTML = headLinkText.substring(0, headLinkText.length-1) + "≡";
      document.getElementById("headLink").style.backgroundColor = "transparent";
      hamburger = true;
    }
}

let textToClipBoardHeader;

// dropdown
function CopyToClipboard(text) {
  navigator.clipboard.writeText("tjm7126@rit.edu");
  alert("Copied 'tjm7126@rit.edu' to clipboard");
}

function init() {
  textToClipBoardHeader = document.querySelector(".text-to-clip-board");
  textToClipBoardHeader.onclick = function() { CopyToClipboard("it worked")};
}

window.onload = init;