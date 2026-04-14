"use client"

import { useState } from "react"
import { X, ChevronRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

const questions = [
  {
    question: "Qual é o seu principal objetivo?",
    options: ["Perder gordura", "Definir o corpo", "Ganhar massa magra", "Melhorar saúde"]
  },
  {
    question: "Há quanto tempo você tenta emagrecer?",
    options: ["Menos de 6 meses", "6 meses a 1 ano", "1 a 3 anos", "Mais de 3 anos"]
  },
  {
    question: "Qual é o seu nível de atividade física atual?",
    options: ["Sedentário", "Pouco ativo", "Moderadamente ativo", "Muito ativo"]
  },
  {
    question: "Você tem dificuldade em seguir dietas?",
    options: ["Sim, sempre desisto", "Às vezes", "Raramente", "Nunca tentei"]
  },
  {
    question: "Qual é a sua faixa etária?",
    options: ["18-25 anos", "26-35 anos", "36-45 anos", "46+ anos"]
  }
]

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  if (!isOpen) return null

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers([])
    setShowResult(false)
    onClose()
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-card border border-border overflow-hidden">
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="h-1 bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-6 pt-8">
              <p className="text-sm text-muted-foreground mb-2">
                Pergunta {currentStep + 1} de {questions.length}
              </p>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {questions[currentStep].question}
              </h3>

              <div className="flex flex-col gap-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 rounded-xl border border-border bg-secondary/50 hover:bg-primary/20 hover:border-primary transition-all duration-200 group"
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-foreground">{option}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Seu Plano Está Pronto!
              </h3>
              <p className="text-muted-foreground">
                Com base nas suas respostas, criamos um plano personalizado para você
              </p>
            </div>

            {/* Preview bloqueado */}
            <div className="relative rounded-xl border border-border bg-secondary/30 p-4 mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent z-10 flex items-end justify-center pb-4">
                <div className="text-center">
                  <Lock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Desbloqueie para ver completo</p>
                </div>
              </div>
              
              <div className="blur-sm">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">1.650</p>
                    <p className="text-xs text-muted-foreground">kcal/dia</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">120g</p>
                    <p className="text-xs text-muted-foreground">Proteína</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">150g</p>
                    <p className="text-xs text-muted-foreground">Carboidratos</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Café da manhã: Omelete com...</p>
                  <p>Almoço: Frango grelhado com...</p>
                  <p>Jantar: Salmão com...</p>
                </div>
              </div>
            </div>

            {/* Oferta */}
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground line-through">De R$97</p>
              <p className="text-3xl font-bold text-primary">R$37</p>
              <p className="text-xs text-muted-foreground">Menos de R$1 por dia</p>
            </div>

            <Button
              onClick={() => window.open("#checkout", "_self")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
            >
              DESBLOQUEAR MEU PLANO AGORA
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              7 dias de garantia incondicional
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
