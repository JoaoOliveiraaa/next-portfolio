"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulando envio do email
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div className="py-6 md:py-8 w-full max-w-5xl mx-auto">
      <div className="bg-gray-50 dark:bg-gray-900 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
          <h1 className="text-2xl md:text-3xl font-bold">Entre em contato</h1>
        </div>
        
        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
          Preencha o formulário abaixo para entrar em contato comigo. Responderei o mais breve possível.
        </p>

        {submitted ? (
          <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-3 md:p-4 rounded-lg mb-6 text-sm md:text-base">
            Mensagem enviada com sucesso! Obrigado pelo contato.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs md:text-sm font-medium">
                Nome completo
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs md:text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-sm"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs md:text-sm font-medium">
              Assunto
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Assunto da mensagem"
              value={formData.subject}
              onChange={handleChange}
              required
              className="text-sm"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs md:text-sm font-medium">
              Mensagem
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Escreva sua mensagem aqui..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="text-sm"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
            size="sm"
          >
            {isSubmitting ? (
              <span className="text-xs md:text-sm">Enviando...</span>
            ) : (
              <>
                <Send className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">Enviar mensagem</span>
              </>
            )}
          </Button>
        </form>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 p-4 md:p-6 rounded-lg">
        <h2 className="text-lg md:text-xl font-bold mb-4">Outras formas de contato</h2>
        <div className="space-y-3 md:space-y-4 text-sm md:text-base">
          <div>
            <p className="font-medium">Email profissional:</p>
            <a href="mailto:contato@joaopedro.com" className="text-blue-500 hover:underline">
              contato@joaopedro.com
            </a>
          </div>
          <div>
            <p className="font-medium">LinkedIn:</p>
            <a 
              href="https://linkedin.com/in/joaopedro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/joaopedro
            </a>
          </div>
          <div>
            <p className="font-medium">Github:</p>
            <a 
              href="https://github.com/joaopedro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/joaopedro
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 