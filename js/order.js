window.onload=function(){	
var list = document.querySelector(".behaeltnis")
var items = document.getElementsByClassName('klang');
var sortList = [];

for (var i = items.length - 1; i >= 0; i--) {
    sortList.push(items[i]);
    list.removeChild(items[i]);
}

sortList.sort(function(a, b) {
     var A = a.textContent.toLowerCase();
     var B = b.textContent.toLowerCase();
     if (A < B){
        return -1;
     }else if (A > B){
       return  1;
     }else{
       return 0;
     }
});

for (var i = 0, ln = sortList.length; i < ln; i++) {
    list.appendChild(sortList[i]);
}	
	var all = document.getElementsByClassName('klang');
        for(var i = 0; i < all.length; i++) { 
            all[i].childNodes[1].setAttribute('onClick', 'getAudioById(' + i + ').play()'); 
            all[i].childNodes[1].className += " taster";
            all[i].childNodes[3].style.display = 'none'; 
        }		
        playlist();
}

function playlist(){
  var hashes=document.location.hash.substr(1);
  if(typeof hashes !== 'undefined' && hashes.length > 1) {
    var els=document.getElementsByTagName('h2');
    var hashlist=hashes.split(',');
    var duration=0;
    for(var chash in hashlist){
      var hash=hashlist[chash];
      for(var i in els) {
        var name = els[i].innerHTML +'';
        if((name.replace(/ /g, '').replace(/\$/g, 's').toLowerCase()).indexOf(hash) !== -1){
          setTimeout(function(i){getAudioById(i).play();},duration*1000,i);
          duration+=getAudioById(i).duration;;  
          break;
        }
      }
    }
  }
  window.onhashchange=playlist;
}

function getAudioById(id){
  return document.getElementsByClassName("klang")[id].childNodes[3];
}
