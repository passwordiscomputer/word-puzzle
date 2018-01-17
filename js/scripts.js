$(document).ready(function () {

  var sentence = prompt("Give me a word");
  var vowels = ["a", "e", "i", "o", "u"];
  var sentenceArray = sentence.split("");


  var newSentence = sentenceArray.map(function(letter) {
    for (x = 0; x <= vowels.length; x = x + 1) {
      if (letter === vowels[x]) {
        return "-";
      }
    } return letter;
  });

  $("#word").text(newSentence.join(""));

});
