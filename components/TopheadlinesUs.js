import React, { useState } from 'react'
import Axios from 'axios';

const TopHeadlinesUSA = () => {
   
    const [data, setData] = useState([])

    Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=208fb2bcea114daa9a25c3717de19657").then((res) => {
        let articles = res.data.articles;
        setData(articles)
    });

    return ( 
        <div>
            <div class="jumbotron">
                
                <p class="lead">Top headlines in the US.</p>
                <hr class="my-4" />
                {data.map( data =>(
                  <div className="inline">
                        
                        { data.urlToImage ? <img class="img" src={data.urlToImage} alt="Card image cap" /> : null   }
                        
                    </div>
                )
             )}
            </div>
           
           
        </div>
     );
}
 
export default TopHeadlinesUSA;