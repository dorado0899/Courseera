/*


Expected output:

Hello Yusuf
Good Bye Jimmy
Good Bye Jerry
Good Bye Jacob
Hello Pushti	
Hello Darsh
Hello Minal
Hello Rekha
Hello Aarya
Good Bye Jim
*/

(function() {
    var names = ["Yusuf", "Jimmy", "Jerry", "Jacob", "Pushti", "Darsh", "Minal", "Rekha", "Aarya", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
