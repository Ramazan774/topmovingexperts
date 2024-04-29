import { Card } from "react-bootstrap";
import React from "react";

const Card3 = () => {
    return (
        <Card>
            <div class="card text-center">
                <div className="card-header" style={{backgroundColor:"lightgreen"}}>
                    Good
                </div>
                <div class="row no-gutters">
                    <div class="col-auto" style={{textAlign:"left"}}>
                        <img src='' class="img-fluid" alt="shipcars" width={300} height={100} />
                    </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">Ship cars for me</h5>
                            <p class="card-text">
                                <li>Bullet point 1</li>
                                <li>Bullet point 2</li>
                                <li>Bullet point 3</li>
                            </p>
                        </div>
                    </div>
                    <div class="col-auto align-self-center">
                        <div class="card-body">
                            <a href="https://shipcarsfor.me/" target="_blank" class="btn btn-primary float-right mb-2">Get free quote</a>
                            <div class="btn-group d-flex" role="group" aria-label="Call now" style={{marginBottom: "1rem"}}>
                                <a href="#" class="btn btn-light text-dark flex-fill">Call now</a>
                                <a href="#" class="btn btn-success flex-fill">888-800-0088</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <span class="mr-2">4.2 rating</span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>    
            </div>
        </Card>
    );
}
 
export default Card3;