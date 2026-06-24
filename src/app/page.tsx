'use client'

import { useState } from 'react'

const CERTS = [
  'CYSA+', 'SEC+', 'DPO', 'LGPD', 'GDPR', 'CCSA',
  'MCRTA', 'MCBTA', 'EHE', 'PTE', 'CFF', 'CSF',
  'ISMF', 'ISFS', 'ISRMF', 'NSE1', 'NSE2', 'LPI',
  'MCASEA', 'MCSA', 'MCITP', 'MCTS', 'MCP', 'MCT',
  'ITIL', 'CSAP',
]

const SERVICES = [
  {
    icon: '🎯',
    title: 'EASM Shield',
    tag: 'SaaS · A partir de R$497/mês',
    desc: 'Plataforma de External Attack Surface Management que mapeia subdomínios, portas abertas, serviços expostos e vulnerabilidades na sua infraestrutura externa — automaticamente, 24h por dia.',
    cta: 'Ver demonstração',
    href: '#easm',
    highlight: true,
  },
  {
    icon: '🔴',
    title: 'Pentest por Contrato',
    tag: 'A partir de R$5.000 / escopo',
    desc: 'Teste de invasão estruturado com escopo definido, relatório executivo e técnico, e validação de remediação. Web, API, infraestrutura e cloud.',
    cta: 'Solicitar proposta',
    href: '#contact',
    highlight: false,
  },
  {
    icon: '🛡️',
    title: 'vCISO Mensal',
    tag: 'Retainer a partir de R$3.000/mês',
    desc: 'Chief Information Security Officer fracional. Estratégia de segurança, gestão de riscos, políticas, relatórios para diretoria e supervisão de compliance — sem contratar um CISO full-time.',
    cta: 'Conhecer o serviço',
    href: '#contact',
    highlight: false,
  },
  {
    icon: '📋',
    title: 'Consultoria LGPD / DPO',
    tag: 'Projeto ou retainer',
    desc: 'Adequação à LGPD com diagnóstico, mapeamento de dados, criação de políticas, treinamento de equipes e atuação como DPO (Encarregado de Dados) externo.',
    cta: 'Falar sobre LGPD',
    href: '#contact',
    highlight: false,
  },
]

const STACK = [
  { label: 'SIEM', items: 'Splunk · Wazuh · Elastic' },
  { label: 'EDR', items: 'CrowdStrike · CarbonBlack' },
  { label: 'Scan', items: 'subfinder · naabu · nuclei · nmap · httpx' },
  { label: 'Cloud', items: 'AWS · Azure · GCP Security' },
  { label: 'Compliance', items: 'LGPD · GDPR · ISO 27001 · NIST' },
  { label: 'AppSec', items: 'OWASP · Burp Suite · DAST · SAST' },
]

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Portfolio] Contato de ${form.company || form.name}`)
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:barrososolon@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-bg text-text">

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-brand font-bold tracking-tight">
            solon<span className="text-textSub">.sec</span>
          </span>
          <div className="hidden sm:flex items-center gap-6 text-sm text-textSub">
            <a href="#services" className="hover:text-brand transition-colors">Serviços</a>
            <a href="#easm"     className="hover:text-brand transition-colors">EASM Shield</a>
            <a href="#about"    className="hover:text-brand transition-colors">Sobre</a>
            <a href="#contact"
               className="px-4 py-1.5 rounded border border-brand text-brand text-xs font-mono
                          hover:bg-brand hover:text-bg transition-all">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* grid background */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'linear-gradient(#00ff9d 1px,transparent 1px),linear-gradient(90deg,#00ff9d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        {/* scan line */}
        <div className="scan-line absolute inset-0 pointer-events-none h-32 w-full" />

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/5 text-brand text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-brand" />
            Disponível para novos projetos · Manaus, AM
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Solon Barroso
            <span className="block text-brand">Cybersecurity Consultant</span>
          </h1>

          <p className="text-textSub text-lg max-w-2xl mb-8 leading-relaxed">
            18 anos de experiência em segurança ofensiva e defensiva.
            40+ certificações internacionais. Criador do{' '}
            <span className="text-brand font-semibold">EASM Shield</span> — plataforma de
            gestão de superfície de ataque para PMEs brasileiras. DPO certificado.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#easm"
               className="px-6 py-3 bg-brand text-bg font-bold rounded-lg hover:bg-brandDim
                          transition-all brand-glow text-sm">
              Ver EASM Shield →
            </a>
            <a href="#contact"
               className="px-6 py-3 border border-border text-textSub rounded-lg
                          hover:border-brand hover:text-brand transition-all text-sm">
              Falar com consultor
            </a>
          </div>

          {/* stats row */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '18+', label: 'anos de experiência' },
              { value: '40+', label: 'certificações' },
              { value: 'DPO', label: 'LGPD & GDPR certificado' },
              { value: 'EASM', label: 'SaaS proprietário' },
            ].map(s => (
              <div key={s.label} className="p-4 rounded-lg border border-border bg-surface">
                <div className="text-2xl font-bold text-brand font-mono">{s.value}</div>
                <div className="text-xs text-textSub mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-brand text-xs font-mono mb-2">// serviços</p>
            <h2 className="text-3xl font-bold">O que ofereço</h2>
            <p className="text-textSub mt-2 max-w-xl">
              Da descoberta automatizada de exposições até liderança estratégica de segurança —
              serviços sob medida para PMEs e empresas de médio porte.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map(s => (
              <div key={s.title}
                   className={`p-6 rounded-xl border transition-all group
                     ${s.highlight
                       ? 'border-brand/50 bg-brand/5 hover:bg-brand/10'
                       : 'border-border bg-surface hover:border-brand/30'}`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  {s.highlight && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand text-bg font-bold">
                      DESTAQUE
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                <p className="text-xs font-mono text-brand mb-3">{s.tag}</p>
                <p className="text-textSub text-sm leading-relaxed mb-4">{s.desc}</p>
                <a href={s.href}
                   className={`text-sm font-medium transition-colors
                     ${s.highlight ? 'text-brand hover:text-brandDim' : 'text-textSub hover:text-brand'}`}>
                  {s.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EASM SHIELD ── */}
      <section id="easm" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand text-xs font-mono mb-2">// produto</p>
          <h2 className="text-3xl font-bold mb-4">EASM Shield</h2>
          <p className="text-textSub max-w-2xl mb-10 leading-relaxed">
            Plataforma SaaS de External Attack Surface Management. Descobre subdomínios,
            portas abertas, Shadow IT, certificados expirados e vulnerabilidades — de forma
            automática, contínua e sem agente na sua infraestrutura.
          </p>

          {/* pipeline steps */}
          <div className="grid sm:grid-cols-4 gap-3 mb-10">
            {[
              { n: '01', title: 'Descoberta Passiva', desc: 'subfinder + tlsx + dnsx — mapeia toda superfície externa' },
              { n: '02', title: 'Port Scan',          desc: 'naabu top-1000 portas — identifica serviços expostos' },
              { n: '03', title: 'Fingerprint',        desc: 'httpx + nmap — stack tecnológico e banners de serviço' },
              { n: '04', title: 'Risk Engine',        desc: 'nuclei — takeovers, exposures, vulnerabilidades reais' },
            ].map(p => (
              <div key={p.n} className="p-4 rounded-lg border border-border bg-bg">
                <div className="text-brand font-mono text-xs mb-2">{p.n}</div>
                <div className="font-semibold text-sm mb-1">{p.title}</div>
                <div className="text-textSub text-xs leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>

          {/* pricing */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Starter',    price: 'R$497',   period: '/mês', domains: '3 domínios',  scans: 'Scan semanal',  features: ['Dashboard executivo', 'Alertas por email', 'Relatório PDF'] },
              { name: 'Growth',     price: 'R$1.497', period: '/mês', domains: '15 domínios', scans: 'Scan diário',   features: ['Tudo do Starter', 'API access', 'Webhook Slack/Discord', 'Priorização por risco'], highlight: true },
              { name: 'Enterprise', price: 'R$3.997', period: '/mês', domains: 'Ilimitado',   scans: 'Scan contínuo', features: ['Tudo do Growth', 'vCISO mensal incluso', 'SLA 99.9%', 'Onboarding dedicado'] },
            ].map(p => (
              <div key={p.name}
                   className={`p-6 rounded-xl border
                     ${p.highlight ? 'border-brand bg-brand/5' : 'border-border bg-surface2'}`}>
                {p.highlight && (
                  <div className="text-[10px] font-mono text-brand font-bold mb-3">★ MAIS POPULAR</div>
                )}
                <div className="text-xl font-bold mb-1">{p.name}</div>
                <div className="text-3xl font-bold text-brand font-mono">{p.price}
                  <span className="text-sm text-textSub font-normal">{p.period}</span>
                </div>
                <div className="text-xs text-textSub mt-1 mb-4">{p.domains} · {p.scans}</div>
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="text-sm text-textSub flex gap-2">
                      <span className="text-brand">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                   className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-all
                     ${p.highlight
                       ? 'bg-brand text-bg hover:bg-brandDim'
                       : 'border border-border text-textSub hover:border-brand hover:text-brand'}`}>
                  Começar agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand text-xs font-mono mb-2">// sobre</p>
          <h2 className="text-3xl font-bold mb-8">18 anos protegendo infraestruturas</h2>

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <p className="text-textSub leading-relaxed mb-4">
                Tecnólogo em Redes de Computadores com MBA em Gestão da Segurança da Informação
                e pós-graduação em Ethical Hacking, Forense Computacional e Segurança de Redes.
              </p>
              <p className="text-textSub leading-relaxed mb-4">
                Atuei em Blue Team, SOC, AppSec e SecOps. Trabalho com SIEM, EDR e resposta a
                incidentes no dia a dia — o que me permite combinar visão ofensiva e defensiva
                em cada consultoria.
              </p>
              <p className="text-textSub leading-relaxed">
                Baseado em <span className="text-text font-medium">Manaus, AM</span>, atendo
                empresas em todo o Brasil de forma remota e na região Norte presencialmente.
              </p>
            </div>

            {/* tech stack */}
            <div className="space-y-3">
              {STACK.map(s => (
                <div key={s.label} className="flex gap-3 items-start">
                  <span className="text-xs font-mono text-brand w-20 shrink-0 pt-0.5">{s.label}</span>
                  <span className="text-sm text-textSub">{s.items}</span>
                </div>
              ))}
            </div>
          </div>

          {/* cert wall */}
          <div className="mt-12">
            <p className="text-xs font-mono text-muted mb-4">certificações</p>
            <div className="flex flex-wrap gap-2">
              {CERTS.map(c => (
                <span key={c} className="cert-badge">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-6 bg-surface">
        <div className="max-w-2xl mx-auto">
          <p className="text-brand text-xs font-mono mb-2">// contato</p>
          <h2 className="text-3xl font-bold mb-3">Vamos conversar</h2>
          <p className="text-textSub mb-8">
            Auditoria gratuita de superfície de ataque para empresas com 20+ funcionários.
            Sem compromisso.
          </p>

          {sent ? (
            <div className="p-6 rounded-xl border border-brand bg-brand/5 text-center">
              <div className="text-brand text-2xl mb-2">✓</div>
              <p className="font-semibold">Mensagem preparada!</p>
              <p className="text-textSub text-sm mt-1">
                Seu cliente de email deve ter aberto. Se não, escreva para{' '}
                <span className="text-brand">barrososolon@gmail.com</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted font-mono mb-1 block">Nome *</label>
                  <input required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm
                               text-text placeholder:text-muted focus:outline-none focus:border-brand transition-colors"
                    placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-xs text-muted font-mono mb-1 block">Email corporativo *</label>
                  <input required type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm
                               text-text placeholder:text-muted focus:outline-none focus:border-brand transition-colors"
                    placeholder="voce@empresa.com" />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted font-mono mb-1 block">Empresa</label>
                <input
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm
                             text-text placeholder:text-muted focus:outline-none focus:border-brand transition-colors"
                  placeholder="Nome da empresa" />
              </div>
              <div>
                <label className="text-xs text-muted font-mono mb-1 block">Como posso ajudar?</label>
                <textarea required rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm
                             text-text placeholder:text-muted focus:outline-none focus:border-brand
                             transition-colors resize-none"
                  placeholder="Descreva seu desafio ou o que você procura..." />
              </div>
              <button type="submit"
                className="w-full py-3 bg-brand text-bg font-bold rounded-lg hover:bg-brandDim
                           transition-all brand-glow text-sm">
                Enviar mensagem →
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-6 text-sm text-textSub">
            <a href="https://www.linkedin.com/in/solon-barroso-da-silva-28400543/"
               target="_blank" rel="noopener noreferrer"
               className="hover:text-brand transition-colors">
              LinkedIn ↗
            </a>
            <a href="mailto:barrososolon@gmail.com"
               className="hover:text-brand transition-colors">
              barrososolon@gmail.com
            </a>
            <span>Manaus, AM · Brasil</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-sm text-muted">
            solon<span className="text-brand">.sec</span> — Solon Barroso da Silva
          </span>
          <span className="text-xs text-muted">
            Consultor de Cibersegurança · Manaus, AM, Brasil
          </span>
        </div>
      </footer>

    </div>
  )
}
