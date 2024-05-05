import { Card } from "react-bootstrap";
import React from "react";
import image from "./logos//shipcars.png"

const Card3 = () => {
    return (
        <Card>
            <div class="card text-center">
                <div className="card-header" style={{backgroundColor:"lightgreen"}}>
                    <a href="#" class="btn border-black flex-fill"><i class="bi bi-telephone"></i> 844-773-0009</a>
                </div>
                <div class="row no-gutters">
                    <div class="col-auto" style={{textAlign:"left"}}>
                        <div className="logo">
                            <img src={image} class="img-fluid" alt="" width={200} height={100}/>
                        </div>
                    </div>
                <div class="col">
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"26px"}}>Ship cars for me</h5>
                        <div className="content">
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Caters primarily to military member and students.</div>
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Guarantees pricing with no hidden charges.</div>
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Excellent communication with prompt responses to inquiries.</div>
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Chooses carriers based on safety ratings and a minimum of 3 years of experience.</div>
                        </div>
                        </div>
                    </div>
                    <div class="col-auto align-self-center">
                        <div class="card-body">
                            <a href="https://shipcarsfor.me/" target="_blank" class="btn btn-primary float-right mb-2">Get free quote</a>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    <span class="mr-2">4.9 rating</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-half-o checked "></span>
                </div>    
            </div>
        </Card>
    );
}
 
export default Card3;