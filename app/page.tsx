"use client"

import { useState } from "react"
import { 
  Flame, 
  TrendingDown, 
  Zap, 
  CheckCircle2, 
  Lock, 
  Shield, 
  Smartphone,
  Target,
  BarChart3,
  Users,
  Star,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuizModal } from "@/components/quiz-modal"
import { CountdownTimer } from "@/components/countdown-timer"

export default function LandingPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const openQuiz = () => setIsQuizOpen(true)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge de escassez */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Vagas Limitadas</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Seu metabolismo está travado…{" "}
            <span className="text-primary">e isso está te impedindo de emagrecer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Descubra em menos de 2 minutos o plano exato para destravar seu corpo e 
            perder peso em até 30 dias
          </p>

          {/* CTA Principal */}
          <Button
            onClick={openQuiz}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            COMEÇAR AGORA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Leva menos de 2 minutos
          </p>
        </div>
      </section>

      {/* Seção de Dores */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <TrendingDown className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dificuldade de Emagrecer</h3>
              <p className="text-muted-foreground text-sm">
                Você já tentou de tudo mas a balança parece não se mover. Dietas restritivas que nunca funcionam.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Falta de Resultado</h3>
              <p className="text-muted-foreground text-sm">
                Esforço sem recompensa. Você se dedica mas não vê a transformação acontecer no espelho.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Metabolismo Lento</h3>
              <p className="text-muted-foreground text-sm">
                Seu corpo parece resistir a qualquer mudança. Tudo que você come parece virar gordura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quebra de Crença */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Você não está sozinho.{" "}
            <span className="text-primary">E a culpa não é sua.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Milhares de pessoas passam pelo mesmo problema. A diferença está em ter o método certo.
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Como <span className="text-primary">Funciona</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Responda o Quiz</h3>
              <p className="text-muted-foreground">
                Em menos de 2 minutos, entendemos seu perfil e objetivos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Receba Seu Plano</h3>
              <p className="text-muted-foreground">
                Plano 100% personalizado para seu corpo e rotina
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Acompanhe no App</h3>
              <p className="text-muted-foreground">
                Veja sua evolução diária e ajuste seu progresso
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openQuiz}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6"
            >
              COMEÇAR AGORA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">+2.500</p>
              <p className="text-muted-foreground">Alunos Transformados</p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex justify-center mb-4">
                <TrendingDown className="h-10 w-10 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">-6kg</p>
              <p className="text-muted-foreground">Em Média em 30 Dias</p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex justify-center mb-4">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">97%</p>
              <p className="text-muted-foreground">De Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            O Que Você <span className="text-primary">Recebe</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Plano Automático Personalizado</h3>
                <p className="text-sm text-muted-foreground">
                  Alimentação e treinos adaptados ao seu perfil único
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Treinos Simples</h3>
                <p className="text-sm text-muted-foreground">
                  Exercícios para casa ou academia, você escolhe
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Evolução Diária</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe seu progresso e veja resultados reais
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sistema Inteligente Adaptativo</h3>
                <p className="text-sm text-muted-foreground">
                  O plano evolui conforme seu corpo responde
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview do Resultado */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Seu Plano <span className="text-primary">Personalizado</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Veja um exemplo do que você vai receber
          </p>

          {/* Card com preview bloqueado */}
          <div className="relative rounded-2xl border border-border bg-card p-6 md:p-8 overflow-hidden">
            {/* Overlay de bloqueio */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent z-10 flex flex-col items-center justify-end pb-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <p className="text-lg font-semibold mb-2">Seu plano está pronto…</p>
              <p className="text-muted-foreground text-sm mb-6">Desbloqueie para ver completo</p>
              <Button
                onClick={openQuiz}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6"
              >
                DESBLOQUEAR AGORA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Conteúdo blur */}
            <div className="blur-sm select-none">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">1.650</p>
                  <p className="text-sm text-muted-foreground">kcal/dia</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-3xl font-bold text-accent">120g</p>
                  <p className="text-sm text-muted-foreground">Proteína</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-3xl font-bold text-foreground">150g</p>
                  <p className="text-sm text-muted-foreground">Carboidratos</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                  <p className="font-semibold mb-1">Café da Manhã</p>
                  <p className="text-sm text-muted-foreground">Omelete de 3 ovos com espinafre e queijo cottage...</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                  <p className="font-semibold mb-1">Almoço</p>
                  <p className="text-sm text-muted-foreground">Frango grelhado 150g com arroz integral e brócolis...</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                  <p className="font-semibold mb-1">Jantar</p>
                  <p className="text-sm text-muted-foreground">Salmão assado com batata doce e salada verde...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="checkout" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Oferta <span className="text-primary">Especial</span>
          </h2>

          <div className="rounded-2xl border-2 border-primary bg-card p-8 md:p-12">
            <p className="text-muted-foreground line-through text-xl mb-2">De R$97</p>
            <p className="text-5xl md:text-6xl font-bold text-primary mb-2">R$37</p>
            <p className="text-muted-foreground mb-8">Menos de R$1 por dia para transformar seu corpo</p>

            <div className="text-left space-y-3 mb-8">
              {[
                "Plano personalizado",
                "Acesso ao app",
                "Atualizações gratuitas",
                "Comunidade exclusiva",
                "Acompanhamento completo"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={openQuiz}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-8 shadow-lg shadow-primary/30"
            >
              DESBLOQUEAR MEU PLANO AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Escassez - Timer */}
      <section className="py-16 px-4 bg-primary/10 border-y border-primary/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Essa oferta pode sair do ar a qualquer momento
          </p>
          <CountdownTimer />
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            7 Dias de Garantia Incondicional
          </h2>
          <p className="text-muted-foreground mb-8">
            Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento. Sem perguntas.
          </p>
          <Button
            onClick={openQuiz}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6"
          >
            COMEÇAR AGORA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Projeto Corpo 30D. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Quiz Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  )
}
