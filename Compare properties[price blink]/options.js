// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("country");
  var country = select.children[select.selectedIndex].value;
  localStorage["country"] = country;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options saved successfully";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
  
  // Persist change
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
      // Reload parser
      chrome.extension.sendRequest({action:"reloadParser"});
    }
  }
  xhr.open("GET", "http://tb.priceblink.com/universal_scrapes.php?uid=" + localStorage.uid + "&browser=chrome&ver=" + localStorage.version + "&action=u&country_pref=" + localStorage.country + "&n=" + new Date().getMilliseconds(), true);
  xhr.send();
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var country = localStorage["country"];
  if (!country) {
    return;
  }
  var select = document.getElementById("country");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == country) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);