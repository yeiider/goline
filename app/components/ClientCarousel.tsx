"use client"

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

// Importa los estilos CSS de react-slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const clients = [
    { name: 'Maui And Sons', logo: '/images/maui.png' },
    { name: 'Volcom', logo: '/images/volcom.png' },
    { name: 'Ripcurl', logo: '/images/ripcurl.jpg' },
    { name: 'Rusty', logo: '/images/rusty.webp' },
    { name: 'Adwise', logo: '/images/adwise.png' }
]

export default function ClientCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Algunos de nuestros clientes</h2>
            <Slider {...settings} className="flex">
                {clients.map((client, index) => (
                    <div key={index} className="flex items-center justify-center px-4">
                        <div className="w-40 h-40 bg-white flex items-center justify-center shadow-md rounded-lg">
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={150}
                                height={100}
                                objectFit="contain"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
