async function loadCountries() {

    const response = await fetch("data/countries.geojson");

    window.countryData = await response.json();

}
function clearCountries() {

    if (countryLayer) {

        map.removeLayer(countryLayer);

        countryLayer = null;

    }

}
function highlightCountries(countryCodes, color) {

    clearCountries();

    countryLayer = L.geoJSON(countryData, {

        style: function(feature) {

            const code = feature.id;

            if (countryCodes.includes(code)) {

                return {

                    color: color,

                    fillColor: color,

                    fillOpacity: 0.25,

                    weight: 2

                };

            }

            return {

                color: "#bdbdbd",

                fillOpacity: 0,

                weight: 1

            };

        }

    }).addTo(map);

}