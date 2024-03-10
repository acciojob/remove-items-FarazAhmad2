//your JS code here. If required.
function removeColor() {
    let select = document.getElementById("colorSelect");
    let selectedOption = select.options[select.selectedIndex];
    
    if (selectedOption) {
      select.removeChild(selectedOption);
    }
  }

document.getElementsByTagName('input')[0].addEventListener('click', removeColor);