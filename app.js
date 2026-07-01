async function start() {

    initializeMap();

    await loadCountries();

    showAllTrips();

}

start();