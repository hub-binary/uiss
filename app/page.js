"use client"
import servicesData from '/src/data/services.json';
import {FAQ} from '/src/components';
import Link from 'next/link';


export default function Home() {

  return (
    <div>

        {/* Carousel */}
        <div class="container-fluid p-0">
            <div id="blog-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="img\NNPC deployment Pics 1.jpg" alt="Image" />
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white m-0">Premium Security</h4>
                            <h4 class="display-4 m-0 mt-2 mt-md-3 text-white">Best Security Service</h4>
                            <a href="" class="btn btn-lg btn-success mt-3 mt-md-4 px-4">Learn More</a>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img class="w-100" src="img\guards\guards-at-hotel.jpg" alt="Image" />
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white m-0">Your Safety, Our Efforts</h4>
                            <h4 class="display-4 m-0 mt-2 mt-md-3 text-white">Highly Trained Guards</h4>
                            <a href="" class="btn btn-lg btn-success mt-3 mt-md-4 px-4">Learn More</a>
                        </div>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                    <div class="btn btn-success rounded-circle" style={{width: "45px", height: "45px"}}>
                        <span class="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a class="carousel-control-next" href="#blog-carousel" data-slide="next">
                    <div class="btn btn-success rounded-circle" style={{width: "45px", height: "45px"}}>
                        <span class="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>


      <div class="container-fluid py-5 py-lg-0 feature">
          <div class="row py-5 py-lg-0">
              <div class="col-lg-4 p-0">
                  <div class="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
                      <i class="flaticon-policeman display-3 text-success mr-4"></i>
                      <div class="">
                          <h5 class="mb-3">Professional Staff</h5>
                          <p class="m-0">
                              Highly trained security personnels, equipped and ready to protect
                          </p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 p-0">
                  <div class="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
                      <i class="flaticon-helmet display-3 text-success mr-4"></i>
                      <div class="">
                          <h5 class="mb-3">Latest Equipments</h5>
                          <p class="m-0">
                              Our state-of-the-art modern equipments, aid your asset protection
                          </p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 p-0">
                  <div class="feature-item d-flex align-items-center px-5">
                      <i class="flaticon-surveillance display-3 text-success mr-4"></i>
                      <div class="">
                          <h5 class="mb-3">24/7 Security</h5>
                          <p class="m-0">
                              No snooze time on your secuirty, with day and night watch guards
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <div id="about" class="container-fluid mb-5" style={{background: "#f6f6f6"}}>
          <div class="row align-items-center">
              <div class="col-lg-6 px-0">
                  <img width="100%" class="img-fluid" src="img\guards\green-uniformed-guards.jpg" alt="Image" />
              </div>
              <div class="col-lg-6 py-5 py-lg-0 px-3 px-lg-5">
                  <h5 class="text-success mb-3">About Us</h5>
                  <h1 class="mb-4">15 Years Experience</h1>
                  <p>With our experience and intelligence profile, you can be assured of top-notch premium service</p>
                  
                  <div class="row py-2">
                      <div class="col-sm-6">
                          <i class="flaticon-approved display-3 text-success"></i>
                          <h5 class="mt-2">Govt Approved</h5>
                          <p>We are approved and certified by the Federal Beraeu</p>
                      </div>

                      <div class="col-sm-6">
                          <i class="flaticon-medal display-3 text-success"></i>
                          <h5 class="mt-2">Award Winning</h5>
                          <p>We are recognized in the industry as experts</p>
                      </div>
                  </div>
                  <Link href="/about" class="btn btn-lg px-4 btn-success">Learn More</Link>
              </div>
          </div>
      </div>


      <div id="services" class="container pt-5">
          <div class="d-flex flex-column text-center mb-5">
              <h5 class="text-success mb-3">Our Services</h5>
              <h1 class="m-0">Premium Security Services</h1>
          </div>
          
          
          <div class="row pb-3">
            {
                servicesData.map((service, idx) => 
                    <div key={service.key} class="col-md-6 col-lg-4 mb-4">
                        <div class="card mb-2 p-3">
                            <img class="card-img-top" src={service?.image} alt="" />
                            <div class="card-body bg-secondary d-flex align-items-center p-0">
                                <h3 class="flaticon-desk font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-success text-white m-0 mr-3" style={{width: '45px', height: "45px"}}></h3>
                                <h6 class="card-title text-white  m-0">{service?.title}</h6>
                            </div>
                            <div class="card-footer">
                                <p> {service?.description} </p>

                                <Link className="btn btn-success ml-0" href={`/services/${service?.key}`}> Learn More </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
      </div>


      <div class="container-fluid bg-success my-5 py-5 text-center">
          <div class="row pt-5">
              <div class="col-lg-3 col-sm-6 mb-5">
                  <h5 class="fa fa-user-shield mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                  <h4 class="display-4 text-white mb-3" data-toggle="counter-up">200</h4>
                  <h6 class="text-white m-0">Our Guards</h6>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                  <h5 class="fa fa-users mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                  <h4 class="display-4 text-white mb-3" data-toggle="counter-up">115</h4>
                  <h6 class="text-white m-0">Happy Client</h6>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                  <h5 class="fa fa-shield-alt mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                  <h4 class="display-4 text-white mb-3" data-toggle="counter-up">150</h4>
                  <h6 class="text-white m-0">Locations</h6>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5">
                  <h5 class="fa fa-award mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                  <h4 class="display-4 text-white mb-3" data-toggle="counter-up">8</h4>
                  <h6 class="text-white m-0">Awards</h6>
              </div>
          </div>
      </div>


      <div class="container pt-5">
          <div class="row">
              <div class="col-lg-5 mb-5">
                  <h5 class="text-success mb-3">Why Choose Us?</h5>
                  <h1 class="mb-4">Top Level Security</h1>
                  <img class="img-thumbnail mb-4 p-3" src="img\guards\guards-at-hotel.jpg" alt="Image" />
                  <p>
                      Our clients choose us for our diligent gurads and premium security, at the top of industry standards
                  </p>
              </div>

              <div class="col-lg-7">
                  <div class="row">
                      <div class="col-md-6 mb-4">
                          <div class="d-flex flex-column">
                              <div class="d-flex align-items-center mb-3">
                                  <h3 class="flaticon-policeman font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-success text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                  <h6 class="text-truncate m-0">High Security</h6>
                              </div>
                              <p>Security assessment and protection service, guarantees the highest level of security</p>
                          </div>
                      </div>

                      <div class="col-md-6 mb-4">
                          <div class="d-flex flex-column">
                              <div class="d-flex align-items-center mb-3">
                                  <h3 class="flaticon-bodyguard font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-success text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                  <h6 class="text-truncate m-0">Trained Guards</h6>
                              </div>
                              <p>Highly trained, vigilant guards ensure your safety and asset protection.</p>
                          </div>
                      </div>

                      <div class="col-md-6 mb-4">
                          <div class="d-flex flex-column">
                              <div class="d-flex align-items-center mb-3">
                                  <h3 class="flaticon-approved font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-success text-white m-0 mr-3" style={{width:"45px", height: "45px"}}></h3>
                                  <h6 class="text-truncate m-0">Govt Approved</h6>
                              </div>
                              <p>We are certified and approved by the Federal Government</p>
                          </div>
                      </div>

                      <div class="col-md-6 mb-4">
                          <div class="d-flex flex-column">
                              <div class="d-flex align-items-center mb-3">
                                  <h3 class="flaticon-medal font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-success text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                  <h6 class="text-truncate m-0">Award Winning</h6>
                              </div>
                              <p>Industry recognized, stellar sevice and conduct, awarded and certified by ALPSN</p>
                          </div>
                      </div>

                      <div class="col-md-6 mb-4">
                          <div class="d-flex flex-column">
                              <div class="d-flex align-items-center mb-3">
                                  <h3 class="flaticon-helmet font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-success text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                  <h6 class="text-truncate m-0">Latest Equipments</h6>
                              </div>
                              <p>Latest gadgets, cameras, metal detectors and security gadgets are employed.</p>
                          </div>
                      </div>

                      <div class="col-md-6 mb-4">
                          <div class="d-flex flex-column">
                              <div class="d-flex align-items-center mb-3">
                                  <h3 class="flaticon-surveillance font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-success text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                  <h6 class="text-truncate m-0">24/7 Protection</h6>
                              </div>
                              <p>Round the clock, day and night watch guards provide full scope security</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class=" container-fluid bg-success my-5 py-5 text-center">
          <h1 class="text-white font-weight-bold mt-5 mb-3">Subscribe Our Newsletter</h1>
          <p class="text-white mb-4">Subscribe to get Our latest insights and analysis right in your inbox</p>
          <form class="form-inline justify-content-center mb-5">
              <div class="col-sm-12 col-md-8">
                  <input type="text" class="form-control w-100" placeholder="Your Email" />
                  <div class="">
                      <button class="btn-block btn btn-secondary p-2 font-weight-bold" type="submit">Subscribe</button>
                  </div>
              </div>
          </form>
      </div>

{/* 
      <div class="container-fluid my-5 p-0 py-5" style={{background: "#f6f6f6"}}>
          <div class="container p-0 py-5">
              <div class="d-flex flex-column text-center mb-5">
                  <h5 class="text-success mb-3">Testimonial</h5>
                  <h1 class="m-0">What Our Clients Say</h1>
              </div>

              <div class="owl-carousel testimonial-carousel">
                  <div class="testimonial-item px-3">
                      <div class="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                          Unity Integrated Security has been an exceptional partner in ensuring the safety and security of our business premises. We highly recommend Unity Integrated Security for their reliability, responsiveness, and commitment to protecting our assets.
                      </div>
                      <div class="d-flex align-items-center">
                          <div class="pl-4">
                              <p class="m-0"> KADFAMA - Kaduna State Facility Management Agency </p>
                          </div>
                      </div>
                  </div>

                  <div class="testimonial-item px-3">
                      <div class="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                          Unity Integrated Security has been our trusted security provider for several years, and we couldn't be happier with their services. Their team of experts conducted a thorough security assessment and implemented a comprehensive security plan tailored to our unique needs. 
                      </div>
                      <div class="d-flex align-items-center">
                          <div class="pl-4">
                              <p class="m-0"> NNPC Housing Estate </p>
                          </div>
                      </div>
                  </div>

                  <div class="testimonial-item px-3">
                      <div class="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                          We confidently recommend Unity Integrated Security to any organization in need of top-notch security solutions. Their professional and well-trained security personnel have provided round-the-clock surveillance, giving us peace of mind.
                      </div>
                      <div class="d-flex align-items-center">
                          <div class="pl-4">
                              <p class="m-0"> Ashmed Specialist Hospital </p>
                          </div>
                      </div>
                  </div>

                  <div class="testimonial-item px-3">
                      <div class="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                          The exceptional service we have received from Unity Integrated Security sets them apart from other security companies. Their guards are highly trained, professional, and courteous. We've had the pleasure of working with their team during various events, and they consistently deliver outstanding results
                      </div>
                      <div class="d-flex align-items-center">
                          <div class="pl-4">
                              <p class="m-0"> AMCON - Asset Management Company of Nigeria </p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div> */}

      <div id="" class="container" style={{background: "#f6f6f6;"}}>
          <div class="d-flex flex-column text-center mb-5">
              <h5 class="text-success mb-3">Frequently Asked Questions</h5>
              <h1 class="m-0">FAQs</h1>
          </div>

          <div id="" class="container-fluid mb-5" style={{background: "#f6f6f6;"}}>
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
  )
}
