"use client"
import Link from 'next/link';
import servicesData from '/src/data/services.json';

export const ServicesPage = ({}) => {

    return(
        <div className="mt-9">
            
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
                                       <div className="" style={{
                                        height: '73px',
                                        overflowY: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whitespace: 'nowrap'
                                       }} 
                                       dangerouslySetInnerHTML={{ __html: service?.description}}
                                       ></div>

                                       <Link className="btn btn-success ml-0" href={`/services/${service?.key}`}> Learn More </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}


export default ServicesPage;