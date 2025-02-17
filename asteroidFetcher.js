const fetchAsteroid = async function (){
    try{
        const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2025-02-07&end_date=2025-02-14&api_key=gctfMsX0ktAnXALLNnaFWaOmjdDsxdbTPVx2ZmBn');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();

    }
    catch(error){
        console.error(error);
    }
}

function getNearObjects(data) {
    const maxDiameters = [];
    for (const date in data.near_earth_objects) {
        const asteroids = data.near_earth_objects[date];
        // console.log(asteroids);
        for (let asteroid of asteroids) {
            // console.log(asteroid);
            maxDiameters.push(asteroid.estimated_diameter.kilometers.estimated_diameter_max);
        }
    }
    console.log(maxDiameters);
}

fetchAsteroid().then(data => getNearObjects(data));