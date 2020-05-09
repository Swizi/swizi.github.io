// function([string1, string2],target id,[color1,color2])    
// consoleText(["Босый Денис.", 'HTML, CSS, JS', 'Открыт к сотрудничеству'], "name", ["#FFFFFF", "#CC3333", "#FFFFFF"]);

document.getElementById("name").onclick = function() { consoleText("Денис Босый.", "name", "surname", ["#FFFFFF", "#CC3333"]) }
document.getElementById("surname").onclick = function() { consoleText("Денис Босый.", "name", "surname", ["#FFFFFF", "#CC3333"]) }

function consoleText(word, id1, id2, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("name");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id1);
  var red_target = document.getElementById(id2);
  var last_char_index = 0;
  var isTextRed = false;
  red_target.innerHTML = "";
  // red_target.setAttribute("style", "color:" + colors[1])
  // target.setAttribute("style", "color:" + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      console.log("Writing");
      waiting = true;
      target.innerHTML = word.substring(0, letterCount)
      window.setTimeout(function() {
        // var usedColor = colors.shift();
        // colors.push(usedColor);
        x = 1;
        // target.setAttribute("style", "color:" + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === word.length + 1 && waiting === false) {
      console.log("Writing ended;");
      red_target.setAttribute("style", "color:", colors[1]);
    } else if (waiting === false) {
      console.log("Writing");
      if (letterCount == 6) {
        isTextRed = !isTextRed;
        last_char_index = letterCount;
      }
      if (!isTextRed) {
        target.innerHTML = word.substring(last_char_index, letterCount);
      } else {
        red_target.innerHTML = word.substring(last_char_index, letterCount);
      }
      // if (textIndex == 0) {
      // } else if (textIndex == 1) {
      //   red_target.innerHTML = word.substring(prev_word_last_char_index, letterCount);
      // } else {
      //   dot_target.innerHTML = word.substring(prev_word_last_char_index, letterCount);
      // }
      // if ((word[letterCount] == "Б") || (word[letterCount] == ".")) {
      //   console.log("Entered");
      //   prev_word_last_char_index = letterCount;
      //   prev_word_value = word.substring(prev_word_last_char_index, letterCount);
      //   textIndex += 1;
      // }
      letterCount += x;
    }
  }, 120)
}

$(document).ready(function() {
  $(".books_slider").slick({
    dots: true
  });
  $(".portfolio_slider").slick({});
});


function slowScroll(id) {
  var offset = 60;
  $("html, body").animate({
    scrollTop: $(id).offset().top + offset
  }, 500);
  return false;
}