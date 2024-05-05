import React from "react";
import { Card } from "react-bootstrap";
import image from './logos/lfgo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Card1 = () => {
    return (
        <Card>
            <div class="card text-center">
                <div className="card-header" style={{backgroundColor:"lightgreen"}}>
                    <a href="#" class="btn border-black flex-fill"><i class="bi bi-telephone"></i> 855-766-0007</a>
                </div>
                <div class="row no-gutters">
                    <div class="col-auto" style={{textAlign:"left"}}>        
                        <div className="logo">
                            <img src={image} class="img-fluid" alt="" width={200} height={100} />
                        </div> 
                    </div>
                <div class="col">
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"26px"}}>LFGO</h5>
                            <div className="content">
                                <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Prices are always guaranteed.</div>
                                <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Quick response times to emails, texts, and calls.</div>
                                <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Though prices may seem high, they reflect the quality and reliability of the service.</div>
                                <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Utilizes carriers with over 3 years of experience, ensuring professionalism and responsibility.</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto align-self-center">
                        <div class="card-body">
                            <a href="https://lfgo.at/" target="_blank" class="btn btn-primary float-right mb-2">Get free quote</a>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    <span class="mr-2">4.9 rating</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-half-o checked"></span>
                </div>   
            </div>
        </Card> 
    );
};
 
export default Card1;