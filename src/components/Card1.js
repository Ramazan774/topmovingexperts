import React from "react";
import { Card } from "react-bootstrap";
import image from './logos/lfgo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Card1 = () => {
    return (
        <Card>
            <div class="card text-center">
                <div className="card-header" style={{backgroundColor:"lightgreen"}}>
                    <a href="#" class="btn border-black flex-fill"><i class="bi bi-telephone"></i> 888-888-8888</a>
                </div>
                <div class="row no-gutters">
                    <div class="col-auto" style={{textAlign:"left"}}>        
                    <div className="logo">
                        <img src={image} class="img-fluid" alt="" width={200} height={70} />
                    </div> 
                    </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title" style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"26px"}}>LFGO</h5>
                        <div>
                            <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Punctual and reliable transportation services tailored to your needs.</div>
                            <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Extensive fleet of vehicles ensuring comfort, safety, and efficiency.</div>
                            <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Dedicated customer support available 24/7 to assist with any inquiries or bookings.</div>
                            <div class="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Eco-friendly initiatives integrated into our operations, promoting sustainability while delivering exceptional service.</div>
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
                <span class="fa fa-star checked"></span>
            </div>   
            </div>
        </Card> 
    );
};
 
export default Card1;