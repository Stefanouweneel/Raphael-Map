var modal = document.getElementById('infoModal');
var overlay = document.getElementById('overlay');

var setCountry = function(name, description) {
  var country = {};
  country.name = name;
  country.description = description;
  return country;
};

var vietnam = setCountry("Vietnam", "This is Vietnam");
var cambodia = setCountry("Cambodia", "This is Cambodia");
var laos = setCountry("Laos", "This is Laos");
var indonesia = setCountry("Indonesia", "This is Indonesia");
var thailand = setCountry("Thailand", "This is Thailand");
var myanmar = setCountry("Myanmar", "This is Myanmar");
var malaysia = setCountry("Malaysia", "This is Malaysia");
var philippines = setCountry("Philippines", "This is the Philippines");
var east_timor = setCountry("East Timor", "This is East Timor");
var brunei = setCountry("Brunei", "This is Brunei");
var singapore = setCountry("Singapore", "This is Singapore");

var countries = [laos, indonesia, thailand, myanmar, vietnam, malaysia, philippines, cambodia, east_timor, brunei, singapore];

var hoverCountry = function() {
  for (var i = 0; i < regions.length; i++) {
    regions[i].mouseover(function() {
      this.node.style.opacity = 0.5;
      document.getElementById('region-name').innerHTML = this.data('id');
    });
    regions[i].mouseout(function() {
      this.node.style.opacity = 1;
    });
  }
}

var openModal = function() {
  for (var i = 0; i < regions.length; i++) {
    regions[i].click(function() {
      modal.style.display = "block";
      overlay.style.display = "block";
      for (var i = 0; i < countries.length; i++) {
        if (this.data('id') == countries[i].name) {
          document.getElementById('country-name').innerHTML = countries[i].name;
          document.getElementById('country-content').innerHTML = countries[i].description;
        }
      }
    });
  }
}

var closeModal = function(e) {
  $('#close, #overlay').click(function(e) {
    modal.style.display = "none";
    overlay.style.display = "none";
    e.preventDefault();
  });
  $(document).keyup(function(e) {
    if (e.which == 27) {
      modal.style.display = "none";
      overlay.style.display = "none";
      e.preventDefault();
    }
  });
}

hoverCountry();
openModal();
closeModal();
