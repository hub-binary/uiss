"use client"
import Link from 'next/link';
import servicesData from '/src/data/services.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';


export const ServicesPage = ({}) => {

    const { serviceKey } = useParams()
    const service = servicesData.find( elem => elem.key === serviceKey)
    
    return(
        <div className="mt-9 pt-7">
            <div id="services" class="container mt-7 pt-5">
                <div class="d-flex flex-column text-center mb-5">
                    <h1 class="m-0">{service.title}</h1>
                </div>

                <div className="text-center">
                    <img src={service.image} height={100} />

                    <h5 dangerouslySetInnerHTML={{ __html: service.description }}></h5>
                </div>
            </div>

        </div>
    )
}


export default ServicesPage;