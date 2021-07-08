/*
     Stop snooping around my stuff, but here's the obligatory line:
     To the stray dogs.
*/
function copyDiscord() {
     var theText = 'Viperr#1619';

     var hiddenCopy = document.createElement('div');
     hiddenCopy.innerHTML = theText;
     hiddenCopy.style.position = 'absolute';
     hiddenCopy.style.left = '-9999px';

     var currentRange;
     if (document.getSelection().rangeCount > 0) {
          currentRange = document.getSelection().getRangeAt(0);
          window.getSelection().removeRange(currentRange);
     }
     else {
          currentRange = false;
     }

     document.body.appendChild(hiddenCopy);
     var CopyRange = document.createRange();
     CopyRange.selectNode(hiddenCopy);
     window.getSelection().addRange(CopyRange);

     try {
          document.execCommand('copy');
     }
     catch (err) {
          window.alert("what browser are you using smh... take this error : " + err);
     }
     window.getSelection().removeRange(CopyRange);
     document.body.removeChild(hiddenCopy);

     if (currentRange) {
          window.getSelection().addRange(currentRange);
     }
}