import Image from 'next/image'

interface Technology {
    name: string
    logo: string
}

const technologies: Technology[] = [
    { name: 'Adobe Experience Cloud', logo: '/images/adomecommerce.png' },
    { name: 'Microsoft', logo: '/images/microsoft.png' },
    { name: 'AWS', logo: '/images/aws.png' },
    { name: 'Google Cloud', logo: '/images/googlecloud.png' },
    { name: 'Docker', logo: '/images/docker.png' },
    { name: 'Kubernetes', logo: '/images/kubernetes.png' },
    { name: 'GitHub', logo: '/images/github.png' },
    { name: 'Open IA', logo: '/images/openai.png' }
]

export default function Technology() {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                    Tecnologías con las que trabajamos
                </h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="col-span-1 flex justify-center items-center">
                            <Image
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                width={200}
                                height={100}
                                className="max-h-24 w-auto"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600 mt-8">
                    Y mucho más... En GoLine tenemos la capacidad de trabajar con una amplia gama de tecnologías para adaptarnos a las necesidades de tu negocio.
                </p>
            </div>
        </div>
    )
}
