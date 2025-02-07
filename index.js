const fetchAsteroid = async function (){
    try{
        const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
        
    }
    catch(error){
        console.error(error);
    }
    
}
