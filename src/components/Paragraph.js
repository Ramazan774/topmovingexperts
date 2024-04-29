import React from "react";

const Paragraph = () => {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h4 class="display-4" style={{fontFamily:"bold", fontSize:"26px"}}>Best Moving Companies in 2024</h4>
                <p style={{fontSize:"12px", fontFamily:"bold"}}>Last updated: April 28, 2024</p>
                <p class="lead" style={{fontSize:"16px"}}>Moving to a new state can be a stressful experience. 
                    Even worse, there are unethical companies on the market that can misquote prices 
                    (they claim inaccurate rates to make the price seem low) or lose valuable items.
                    We've personally vetted the companies below to ensure the most trustworthy options.</p>
            </div>
        </div>
    )
}

export default Paragraph;