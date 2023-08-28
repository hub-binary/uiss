"use client"

import { FAQ } from "@/src/components";


export const FAQsPage=()=>{

    return(
        <div>
            <div class="container-fluid mt-5 pt-5">
                <div class="d-flex flex-column text-center my-5">
                    <h1 class="text-success mb-3">Frequently Asked Questions</h1>
                    {/* <h6 class="m-0">Answers to </h6> */}
                </div>

                <div class="container">
                
                    <div id="about" class="container-fluid mb-5" style={{background: "#f6f6f6"}}>
                        <div class="row align-items-flex">

                            <FAQ
                                question={"What type of security do you provide?"}
                                answer={
                                    <div>
                                        <p> We provide you with various security options according to your unique needs. </p>
                                        <p> Our Services Include. </p>
                                        <ul className="list-disc pl-7">
                                            <li> Security Equipment </li>
                                            <li> Security Guards Services </li>
                                            <li> Security Drivers Services </li>
                                            <li> Security Watch Dogs </li>
                                            <li> Body Guards secuirty </li>
                                            <li> Maintenance Services </li>
                                            <li> Warehousing Services </li>
                                            <li> Security Seminars + Workshop & Training Services </li>
                                            <li> Firefighting Equipment </li>
                                            <li> Warehousing Services </li>
                                            <li> Consultancy </li>
                                            <li> Facility Management Services </li>
                                        </ul>
                                    </div>
                                }
                            />

                            <FAQ 
                                question={"How much does your service cost?"}
                                answer={"Our service fees are affordable and varies depending on your location and scope of the work."}
                            />
                                                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default FAQsPage;