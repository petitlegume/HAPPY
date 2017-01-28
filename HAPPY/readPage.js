var wordCount = 0;
var profanityCount = 0;

var $set = $('p:not(:has(*)), b:not(:has(*)), a:not(:has(*))');
var len = $set.length;
$set.each(function(index){
    var el = $(this);
    var text = $(this).html();
    var words = text.split(/[ ,]+/).filter(Boolean);

    wordCount++;
    words.forEach(function(word){

        profanityCount++;
    });

    if (index == len - 1) {

        if (!$("#happy").length) {
            chrome.runtime.sendMessage({
                action: 'displayHappyPercentage',
                wordCount: wordCount,
                profanityCount: profanityCount
            });
            var happyPercentage = (profanityCount * 1.0 / wordCount) * 100;
            $('<div id="happy" style="position: fixed; border-radius:5px; background-color: rgba(0,0,0,0.5); color:white; bottom:20px; right:20px; width:200px; height:100px"> We have made this page happier by :' + happyPercentage + '% </div>').appendTo(document.body);

        }
    }

});


