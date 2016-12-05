var modal = document.getElementById('infoModal');
var span = document.getElementsByClassName("close")[0];

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
    switch (this.data('id')) {
      case 'path6044':
        cambodia.style.display = "block";
        break;
      case 'vietnam':
        vietnam.style.display = "block";
        break;
      default:
        countries.style.display = "none";
    }
  });
}

// rsrGroups[i].click(function() {
//   modal.style.display = "block";
//   span.onclick = function() {
//     modal.style.display = "none";
//   };
//   if (this.data('id') == 'path3562') {
//     vietnam.style.display = "block";
//   }
//   else {
//     vietnam.style.display = "none";
//   }
// });


// window.onclick = function(event) {
//   if (event.target != modal) {
//       modal.style.display = "none";
//   }
// };
