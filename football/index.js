const fetchFootball = async() =>{
    try{
    const response = await fetch('https://imdb-com.p.rapidapi.com/news/get-by-category?category=TOP',{
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'dc4889e492msha7e5ae87cfb347ep146a6fjsn708b7914f554',
		'x-rapidapi-host': 'imdb-com.p.rapidapi.com'
        }
    });
    if(!response){
        throw new error(`HTTP error! ${response.status}`)
    }
    const data = await response.json()
    console.log(data); 
    console.log(data.data.news.edges[0].node.image); 
    return data
} catch(err){
    console.log('Error fetching football data:', err);
}


}
fetchFootball();