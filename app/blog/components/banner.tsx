'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function GolineBlogBanner() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const drawPattern = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = '#2563eb'

            const size = 20
            const offset = size * 0.5
            const time = Date.now() * 0.001

            for (let x = 0; x < canvas.width + size; x += size) {
                for (let y = 0; y < canvas.height + size; y += size) {
                    const distX = (x - canvas.width * 0.5) * 0.005
                    const distY = (y - canvas.height * 0.5) * 0.005
                    const distance = Math.sqrt(distX * distX + distY * distY)

                    const angle = Math.sin(distance * 8 + time) * Math.PI

                    ctx.save()
                    ctx.translate(x, y)
                    ctx.rotate(angle)
                    ctx.fillRect(-offset, -offset, size * 0.5, size * 0.5)
                    ctx.restore()
                }
            }

            requestAnimationFrame(drawPattern)
        }

        drawPattern()

        const handleResize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="relative overflow-hidden bg-blue-600 text-white">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-20"
                aria-hidden="true"
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
                        Blog de{' '}
                        <span className="relative">
              <span className="relative z-10">Goline</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-400 -skew-x-12" aria-hidden="true" />
            </span>
                    </h1>
                    <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
                        Explorando las últimas tendencias y mejores prácticas en desarrollo web
                    </p>
                    <div className="flex justify-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="w-24 h-24 sm:w-32 sm:h-32"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}