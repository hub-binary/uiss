"use client"


export const FAQsPage=()=>{
     
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
      const answer = faq.querySelector('.answer');
  
      faq.addEventListener('click', () => {
        const active = document.querySelector('.faq.active')
        if (active){
            active.classList.remove('active')
        }
        answer.classList.toggle('active');
      });
    });
  
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

                            <div class="col-lg-6 px-0">
                                <div class="faq active card-body shadow-sm border-0 p-3">
                                    <h3 class="question">What type of security do you provide?</h3>
                                    <div class="fadeIn answer">
                                        <p> We provide you with various security options according to your unique needs. </p>
                                        <p> Our Services Include. </p>
                                        <ul>
                                            <li> Body Guards secuirty</li>
                                            <li> Location secuirty</li>
                                            <li> CCTV secuirty and monitoring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-6 px-0">
                                <div class="faq active card-body shadow-sm border-0 p-3">
                                    <h3 class="question">How much does your service cost?</h3>
                                    <div class="fadeIn answer">To play the accordion, place the instrument on your chest with the bellows facing away. Use one hand to press the buttons or keys on the melody side while the other hand controls the bellows' motion. By alternately squeezing and pulling the bellows and pressing the buttons, you can produce different notes and chords.</div>
                                </div>
                            </div>
                                                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default FAQsPage;