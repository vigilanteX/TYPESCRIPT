interface Movie{
    title:string;
    duration:number;
}

interface TVShow
{
    title:string;
    numEpisodes:number;
    episodeDuration:number
}

function getRuntime(media:Movie|TVShow)
{
    if('episodeDuration' in media)
    {
       return media
    }
    return media
    
}