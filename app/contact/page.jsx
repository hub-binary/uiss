"use client"

export const ContactPage = ({ }) =>{

    function handleSubmit(evarg){
        evarg.preventDefault()
    }

    return(

        <div>
            <div class="container-fluid mt-5 pt-5">
                <div class="d-flex flex-column text-center my-5">
                    <h1 class="text-success mb-3">Contact Us</h1>
                    <h6 class="m-0">Contact us for enquiries</h6>
                </div>
                <div class="row">
                    <div class="col-12 p-0">
                        <iframe
                        className=""
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2907.0461560210606!2d7.45110330402182!3d10.51067002520615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNUT%20building%20mogadishu%20city%20center%2C%20kaduna!5e1!3m2!1sen!2sng!4v1687531555724!5m2!1sen!2sng"
                        width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-12">
                        <div class="contact-form bg-white">
                            <div id="success"></div>
                            <form onSubmit={handleSubmit} name="sentMessage" method="post" novalidate="novalidate" netlify>
                                <div class="control-group">
                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input name="email" type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea name="message" class="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn btn-success" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactPage;