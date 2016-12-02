var modal = document.getElementById('infoModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

for (var i = 0; i < rsrGroups.length; i++) {
  rsrGroups[i].mouseover(function() {
    this.node.style.opacity = 0.5;
    document.getElementById('region-name').innerHTML = this.data('id');
  });
  rsrGroups[i].mouseout(function() {
    this.node.style.opacity = 1;
  });
  rsrGroups[i].click(function() {
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    };
    if (this.data('id') == 'path3562') {
      vietnam.style.display = "block";
    }
    else {
      vietnam.style.display = "none";
    }
  });
}
