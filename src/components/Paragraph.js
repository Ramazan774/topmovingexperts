import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import image from "./logos/ethanCarter.jpg" 
import { Accordion, Tab, Tabs, Card } from "react-bootstrap";

const Paragraph = () => {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="col-md-12">
                    <h4 class="display-4" style={{fontFamily:"sans-serif", fontSize:"35px", fontWeight:"bold"}}>Best Moving Companies in 2024</h4>
                    <div className="row no-gutters">
                        <div className="author-info col-auto">
                            <img src={image} alt="author photo" className="rounded-circle" width="50px" height="50px" />                         
                        </div>
                        <div className="col-auto">
                            <p style={{fontFamily:"monospace", fontWeight:"bold", fontSize:"13px"}}>Written By: Ethan Carter</p>
                            <div style={{display:"flex", alignItems:"center"}}>
                                <p style={{fontFamily:"sans-serif", fontSize:"10px", fontStyle:"italic"}}>Last updated: May 5, 2024</p>               
                            </div>           
                        </div>
                    </div>              
                    <p className="lead" style={{fontFamily:"sans-serif", fontSize:"16px"}}>
                        Welcome to our guide on choosing the right car transportation service. 
                        As someone who has navigated numerous moves—relocating my family, sending a child to university, and even purchasing vehicles from out of state—I have 
                        had my fair share of experiences with various car transportation companies. My goal is to help you understand the ins and outs of this industry and 
                        avoid common pitfalls, so you can make the best choice for your needs.
                    </p>  
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Beware of Bait-and-Switch Tactics</Accordion.Header>
                            <Accordion.Body>
                                <p className="lead" style={{fontFamily:"sans-serif", fontSize:"14px", fontStyle:"italic"}}>Many car transportation companies employ a tactic known as "bait and switch". 
                                Here's how it typically unfolds: </p>
                                <h6>Initial Low Quote:</h6>
                                <p className="lead" style={{fontFamily:"sans-serif", fontSize:"16px"}}>You receive a very attractive quote that seems unbeatable.</p>
                                <h6>Booking Fee: </h6>
                                <p className="lead" style={{fontFamily:"sans-serif", fontSize:"16px"}}>You pay a fee (around $100-$150) to confirm your booking.</p>
                                <h6>The Switch:</h6>
                                <p className="lead" style={{fontFamily:"sans-serif", fontSize:"16px"}}>As the transportation date approaches, the company will claim unforeseen circumstances like increased diesel prices or non-popular route 
                                issues, demanding hundreds of dollars more to carry out the service.</p>
                                <p className="lead" style={{fontFamily:"sans-serif", fontSize:"12px", fontStyle:"italic"}}>This strategy exploits customers' urgent needs and tight schedules, forcing them to pay the increased price under pressure. Sadly, these companies 
                                aren't deterred by negative feedback as their business model thrives on scamming customers, and they often refuse to refund the booking fee, 
                                citing various excuses.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> 
                    <h5 style={{fontStyle:"italic", marginTop:"20px"}}>Understanding Car Shipping Options</h5>
                    <p className="lead" style={{fontFamily:"sans-serif", fontSize:"16px"}}>When shipping a car, the terminology can be confusing. 
                    Here's a breakdown of the main shipping options:</p>  
                    <p style={{fontSize:"10px", fontStyle:"italic"}}>(click on each tab to open)</p>
                    
                        <Tabs
                            defaultActiveKey="options"
                            id="car-shipping-options"
                            className="mb-3" 
                            fill
                        >
                            <Tab className="em" eventKey="open transport" title="Open Transport">
                                This is the most common and cost-effective method. 
                                Cars are transported on an open trailer, 
                                exposed to the elements like rain, snow, and road debris. While this method includes basic insurance, the protection might not cover all damages, 
                                especially those under a deductible.
                            </Tab>
                            <Tab className="em" eventKey="enclosed-transport" title="Enclosed Transport">
                                More expensive but advisable for luxury or low-clearance vehicles. Cars are shipped in a fully enclosed trailer, protecting them from environmental 
                                elements and potential minor damages.
                            </Tab>
                            <Tab className="em" eventKey="door-to-door-service" title="Door-to-Door Service">
                                Often exaggerated in advertisements. Real-world issues like local regulations or 
                                physical obstacles can prevent carriers from delivering directly to 
                                your doorstep. It’s usually more practical to arrange a pickup or drop-off in a nearby, accessible location.
                            </Tab>
                            <Tab className="em" eventKey="broker" title="Choosing a Reliable Broker">
                                Opt for a broker who offers realistic prices and avoids those who entice with 
                                suspiciously low rates, as they may employ inexperienced carriers. Verify that the broker uses experienced carriers and provides transparent information 
                                about additional charges, like those for transporting modified vehicles or those loaded with personal items.
                            </Tab>
                            <Tab className="em" eventKey="preparation-inspection"  title="Vehicle Preparation and Inspection">
                                Ensure your vehicle is prepared correctly and insist on a thorough inspection 
                                before and after transport. Document any discrepancies or damages before signing any paperwork.
                            </Tab>
                            <Tab className="em" eventKey="insurance" title="Insurance and Additional Charges">
                                Some brokers might try to charge extra for supposed insurance benefits or preferred 
                                loading positions (like top load spots), which often don't materialize as promised. Be wary of these upsells, as they are generally unnecessary.
                            </Tab>
                            <Tab className="em" eventKey="expectations" title="Realistic Expectations on Delivery Times and Tracking">
                                Understand that while brokers can guarantee pickup times, delivery dates are often 
                                out of their control. Be skeptical of guaranteed delivery times and real-time tracking promises, as these are often marketing gimmicks.
                            </Tab>
                        </Tabs>
                    
                    
    
                    <h5 style={{fontStyle:"italic", marginTop:"20px"}}>Recommended Companies</h5>
                    <p className="lead" style={{fontFamily:"sans-serif", fontSize:"16px"}}>Based on personal experiences and feedback from family and friends, here are 
                    three reputable companies that stand by their quotes and provide exceptional service:</p>
                </div>
            </div>
        </div>
    )
}

export default Paragraph;