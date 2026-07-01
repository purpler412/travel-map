// 지도에 올라가는 모든 객체를 저장
let tripLayers = [];

// 지도 비우기
function clearMap() {

    tripLayers.forEach(layer => {
        map.removeLayer(layer);
    });

    tripLayers = [];

}

// 여행 하나 그리기
function drawTrip(trip, fit = false) {

    const route = [];

    trip.route.forEach(city => {

        const point = [city.lat, city.lng];

        route.push(point);

        const marker = L.circleMarker(point, {
            radius: 4,
            color: trip.color,
            weight: 1,
            fillColor: "#ffffff",
            fillOpacity: 1
        })
        .bindPopup(city.name)
        .addTo(map);

        tripLayers.push(marker);

    });

    const line = L.polyline(route, {
        color: trip.color,
        weight: 4,
        opacity: 0.9
    }).addTo(map);

    tripLayers.push(line);

    if (fit) {
        map.fitBounds(route, {
            padding: [50, 50]
        });
    }

}

// 모든 여행
function showAllTrips() {

    clearMap();

    Object.values(trips).forEach(trip => {

        drawTrip(trip);

    });

}

// 특정 여행
function showTrip(tripId) {

    clearMap();

    drawTrip(trips[tripId], true);
    highlightCountries(trips[tripId].countries, trips[tripId].color);

}