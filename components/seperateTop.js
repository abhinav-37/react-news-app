import React, { useState } from 'react'


const TopHeadlines = (props) => {
    
    return ( 
        <div>
            <div class="jumbotron">
                
                <p class="lead">Top business headlines for {props.title}  </p>
                <hr class="my-4" />
                {props.news.map( data =>(
                  <div className="inline">
                        { data.urlToImage ? <img class="img" src={data.urlToImage} alt="Card image cap" /> : null   }
                                
                    </div>
                )
             )}
            </div>
           
           
        </div>
     );
}
 
export default TopHeadlines;