
(function () {

    var names = ["Romar", "Janjan", "Jensen", "Jason", "Jade-Paul", "Renalyn", "Larry", "Paula", "Larry", "Jimmy"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    