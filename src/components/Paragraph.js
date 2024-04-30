import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Paragraph = () => {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="col-md-10">
                    <h4 class="display-4" style={{fontFamily:"sans-serif", fontSize:"35px", fontWeight:"bold"}}>Best Moving Companies in 2024</h4>
                    <i class="bi bi-calendar2-check"></i>
                    <p style={{fontFamily:"sans-serif", fontSize:"12px", fontWeight:"bold"}}>Last updated: April 30, 2024</p>
                    <p class="lead" style={{fontFamily:"sans-serif", fontSize:"16px"}}>Moving to a new state can be a stressful experience. 
                        Even worse, there are unethical companies on the market that can misquote prices 
                        (they claim inaccurate rates to make the price seem low) or lose valuable items.
                        We've personally vetted the companies below to ensure the most trustworthy options.</p>
                </div>
            </div>
        </div>
    )
}

export default Paragraph;