$(document).ready(function () {
  var sentence = "";
  $("form#sentence-form").submit(function(event) {
    sentence = $("input#some-sentence").val();
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

    event.preventDefault();
  });
  $("form#check-form").submit(function(event){
    event.preventDefault();
    var checkSentence = $("input#check-input").val();
    if(sentence === checkSentence){
      alert("goodjob");
    }else {
      alert("try again my friend");
    };
  });
});
