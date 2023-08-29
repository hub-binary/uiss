"use client"
import servicesData from '/src/data/services.json';
import { useParams } from 'next/navigation';

export const ServicesPage = ({}) => {

    const { serviceKey } = useParams()
    const service = servicesData.find( elem => elem.key === serviceKey)
    
    return(
        <div className="mt-9 pt-7">
            <div id="services" class="container mt-7 pt-5">
                <div class="d-flex flex-column text-center mb-5">
                    <h1 class="m-0">{service.title}</h1>
                </div>

                <div style={{

                }} className="">
                    <img style={{margin: 'auto'}} src={service.image} height={100} />

                    <p className='text-dark' style={{
                        padding: '2rem 1rem',
                        textAlign: 'justify',
                        lineHeight: '35px',
                        marginTop: '3rem'
                    }} dangerouslySetInnerHTML={{ __html: service.description }}></p>
                </div>
            </div>

        </div>
    )
}


export default ServicesPage;