const fetchRandomUserData = async function (){
    try{
        const response = await fetch('https://api.nasa.gov:443');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
        
    }
    catch(error){
        console.error(error);
    }
    
}
