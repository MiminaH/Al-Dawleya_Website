// jshint esversion:6

// LOAD PAGE -------------------------------------
function showLoading(milliseconds) {
  if ($('#loader').css('display') == 'none') {
    $('#loader').css('display', 'block');
    $('#rootDiv').css('display', 'none');
  }

  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("rootDiv").style.display = "block";
  }, milliseconds);
}


// SHOW LOADING ANIMATION BEFORE PAGE IS DISPLAYED.
showLoading(1500);


// NAVBAR -------------------------------------------
/* SHOW/HIDE hamburger menu */
function hamburgerToggle() {
  const x = $('.navlinks_container');

  // checking z-index to apply below for mobile screens only
  if (x.css('z-index') == '1') {
    if (x.css('display') == 'flex') {
      x.css('display', 'none');
    } else {
      x.css('display', 'flex');
    }
  }
}


// SHOW/HIDE language menu
function langToggle() {
  const menu = $('.language_menu');

  if (menu.css('display') == 'none') {
    menu.css('display', 'block');
  } else {
    menu.css('display', 'none');
  }
}


// TRANSLATE content -------------------------------------------
function translateContent(lang, firsLoad) {
  window.location.href = `index-${lang}.html`;
}


// OUR SERVICES SECTION -------------------------------------
makeCardCollapsible();


// making Service Cards collapsible
function makeCardCollapsible() {

  var coll = document.getElementsByClassName("collapsible");
  var collArray = Array.prototype.slice.call(coll);


  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(collArray) {
      this.classList.toggle("active_card");

      let content = this.querySelector('.service_details');

      // OPEN/CLOSE the card
      if (content.style.display === "block") {
        content.style.display = "none";
        content.style.maxHeight = "0";
      } else {
        content.style.display = "block";
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
