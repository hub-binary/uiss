"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const NavBar = ({ mode,  }) => {
    const route = usePathname()

    

    try{
       setTimeout(() => {
        console.log("Router Path ::", route)
       }, 2000)
    }catch(err){
        console.log("Error:", err)
    }

    return (
        <div class="container-fluid p-0 py-2 nav-bar bg-dark">
            <nav class="navbar navbar-expand-lg bg-none navbar-dark py-0">
                <a href="" class="navbar-brand d-block d-lg-none">
                    <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-success">Unity</span> Security</h1>
                </a>

                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav m-auto py-4">
                        <Link href="/" className={`nav-item ${route === '/' && 'active'} nav-link`}>Home</Link>
                        <Link href="/about" className={`nav-item ${route === '/about' && 'active'} nav-link`}>About</Link>
                        <Link href="/services" className={`nav-item ${route === '/services' && 'active'} nav-link`}>Services</Link>
                        <Link href="/contact" className={`nav-item ${route === '/contact' && 'active'} nav-link`}>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}




export const Footer = ({ mode }) => {

    return (
        <div class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
            <div class="row pt-5">
                <div class="col-lg-4 col-md-12 mb-5">
                    <h1 class="mb-3 display-5 text-capitalize font-italic text-white"><span class="text-success">Unity</span> Security</h1>
                    <p class="m-0">
                        Unity Integrated Security Services Ltd. is dynamic and a reliable security outfit operating in the Nigeria with our Head office in Kaduna, and Branch Offices in all geopolitical zones of the Nigerian Federation.
                    </p>
                </div>

                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-md-4 mb-5">
                            <h5 class="text-success mb-4">Quick Links</h5>
                            <div class="d-flex flex-column justify-content-start">
                                <Link class="text-white mb-2" href="/"><i class="fa fa-angle-right mr-2"></i>Home</Link>
                                <Link class="text-white mb-2" href="/about"><i class="fa fa-angle-right mr-2"></i>About Us</Link>
                                <Link class="text-white mb-2" href="/services"><i class="fa fa-angle-right mr-2"></i>Our Services</Link>
                                <Link class="text-white" href="/contact"><i class="fa fa-angle-right mr-2"></i>Contact Us</Link>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-5">
                            <h5 class="text-success mb-4">Get In Touch</h5>
                            <p>Suite 2. Plot 6, NUT Building Mogadishu city center, Kaduna, Nigeria</p>
                            <p><i class="fa fa-phone-alt mr-2"></i>080 2218 0640</p>
                            <p><i class="fa fa-envelope mr-2"></i>info@unitysecservices.com</p>
                            <div class="d-flex justify-content-start mt-4">
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px" }} href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px" }} href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px" }} href="https://www.linkedin.com/company/unitysecservices/"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "40px", height: "40px" }} href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0 text-white">
                        &copy; <a class="text-white font-weight-bold" href="#">Unity Integrated Security Services</a>. All Rights Reserved. Designed by
                        <br />
                        <a class="text-white font-weight-bold" href="https://binsoft.online">Binary Software Inc.</a>
                    </p>
                </div>
                <div class="col-md-6 text-center text-md-right">
                    <ul class="nav d-inline-flex">
                        <li class="nav-item">
                            <Link class="nav-link text-white py-0" href="/privacy">Privacy</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white py-0" href="/terms">Terms</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white py-0" href="/faqs">FAQs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}




export const TopBar = ({ mode, ...props }) => {

    return (
        <div class="container-fluid">
            <div class="row bg-secondary py-3 px-lg-5">
                <div class="col-lg-6 text-center text-lg-left">
                    <div class="d-inline-flex align-items-center">
                        <p class="mr-2 mb-2 mb-lg-0 text-white">Opening Hours:</p>
                        <span class="mb-2 mb-lg-0 text-white">9.00AM - 5.00PM</span>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <p class="m-0 mr-1 text-white">Follow Us:</p>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a class="text-white px-2" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-white px-2" href="https://www.linkedin.com/company/unitysecservices/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-white px-2" href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row d-none d-md-flex align-items-center py-3 px-lg-5">
                <div class="col-lg-4">
                    <a href="" class="navbar-brand d-none d-lg-block">
                        <h1 class="m-0 navbar-brand font-italic"><span class="text-success">Unity</span> Security</h1>
                    </a>
                </div>
                <div class="col-lg-8 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <div class="d-inline-flex flex-column text-center pr-3 border-right">
                            <h6>Our Office</h6>
                            <p class="m-0">Suite 2. Plot 6, NUT Building, Mogadishu City center, KD, NG</p>
                        </div>
                        <div class="d-inline-flex flex-column text-center px-3 border-right">
                            <h6>Email Us</h6>
                            <p class="m-0">info@unitysecservices.com</p>
                        </div>
                        <div class="d-inline-flex flex-column text-center pl-3">
                            <h6>Call Us</h6>
                            <p class="m-0">080 2218 0640</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




