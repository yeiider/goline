'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Loader2, MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function ContactoGoline() {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        company: '',
        size: '',
        email: '',
        phone: '',
        message: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSelectChange = (value: string) => {
        setFormData({
            ...formData,
            size: value,
        })
    }

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json()
            if (data.success) {
                setIsSuccess(true)
                setFormData({
                    name: '',
                    role: '',
                    company: '',
                    size: '',
                    email: '',
                    phone: '',
                    message: '',
                })
            } else {
                setResponseMessage(data.message || 'Error al enviar el mensaje.')
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error)
            setResponseMessage('Error al enviar el mensaje.')
        }
        setIsLoading(false)
    }


    return (
        <div className="relative overflow-hidden">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 pointer-events-none"
            />
            <div className="relative mx-auto max-w-7xl px-4 py-12 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Information Section */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                                    Contáctanos
                                </h1>
                                <p className="max-w-xl text-lg text-white/90">
                                    Estamos aquí para asistirte. ¡Contáctanos y exploremos juntos las soluciones que
                                    podemos crear para tu negocio!
                                </p>
                            </div>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.2}}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3 text-white/90">
                                    <MapPin className="h-5 w-5"/>
                                    <span>Cali, Colombia</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <Mail className="h-5 w-5"/>
                                    <span>contacto@goline.com.co</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <Phone className="h-5 w-5"/>
                                    <span>+57 320 775 3755</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}
                    >
                        <Card
                            className="p-6 lg:p-8 bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow">
                            {isSuccess ? (
                                <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                                    <CheckCircle className="h-12 w-12 text-green-500"/>
                                    <h2 className="text-2xl font-bold">¡Mensaje Enviado!</h2>
                                    <p className="text-muted-foreground">
                                        Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                                    </p>
                                    <Button onClick={() => setIsSuccess(false)} variant="outline">
                                        Enviar otro mensaje
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="name">Nombre*</Label>
                                            <Input
                                                id="name"
                                                required
                                                placeholder="Tu nombre completo"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="role">Rol</Label>
                                            <Input
                                                id="role"
                                                placeholder="Tu posición en la empresa"
                                                value={formData.role}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <Label htmlFor="company">Empresa*</Label>
                                                <Input
                                                    id="company"
                                                    required
                                                    placeholder="Nombre de la empresa"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="size">Tamaño de la empresa</Label>
                                                <Select onValueChange={handleSelectChange} value={formData.size}>
                                                    <SelectTrigger id="size">
                                                        <SelectValue placeholder="Selecciona"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1-10">1-10 empleados</SelectItem>
                                                        <SelectItem value="11-50">11-50 empleados</SelectItem>
                                                        <SelectItem value="51-200">51-200 empleados</SelectItem>
                                                        <SelectItem value="201-500">201-500 empleados</SelectItem>
                                                        <SelectItem value="501+">501+ empleados</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <Label htmlFor="email">Correo*</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    placeholder="tu@correo.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="phone">Teléfono</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+57 320 775 3755"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Mensaje*</Label>
                                            <Textarea
                                                id="message"
                                                required
                                                placeholder="¿Cómo podemos ayudarte?"
                                                className="min-h-[120px] resize-none"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    {responseMessage && <p className="text-red-500">{responseMessage}</p>}
                                    <Button
                                        className="w-full bg-[#8efa00] hover:bg-[#7de600] text-black transition-transform transform hover:scale-105"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar mensaje
                                                <ArrowRight className="ml-2 h-4 w-4"/>
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
