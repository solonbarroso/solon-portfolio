'use client'

import { useState } from 'react'

const CERTS_OFFENSIVE = [
  'CAPenX', 'CNPen', 'CAPen', 'CMPen',
  'Web-RTA', 'API-RTA', 'MCRTA', 'CRT-ID', 'CRTA',
  'CAPT', 'CRTOM', 'EHE', 'PTE',
]

const CERTS_DEFENSIVE = [
  'CSAP', 'CySA+', 'Security+', 'CCSA',
  'Forensics', 'NSE1', 'NSE2',
]

const CERTS_GOV = [
  'DPO', 'LGPD', 'GDPR', 'ISO 27001', 'ISO 27005',
  'ITIL v4', 'Azure Sec Engineer', 'MCSA', 'MCITP', 'LPI Linux',
]

const CERTS_TENABLE = [
  'Tenable EASM SE', 'Tenable EASM Sales', 'Nessus Expert SE',
  'Tenable Cloud SE', 'Tenable Vuln SE', 'Tenable OT SE',
  'Tenable Identity SE', 'Tenable Web App Scanning',
  'Tenable One SE', 'CASA API Security',
]

const CVES = [
  {
    id: 'CVE-2025-63947',
    type: 'SQL Injection',
    target: 'phpMsAdmin v2.2',
    severity: 'Critical',
    desc: 'Stacked query SQL injection via database_mode.php — permite execução arbitrária de comandos no banco de dados sem sanitização.',
    url: 'https://github.com/solonbarroso/vulnerability-research/blob/main/advisories/phpMsAdmin/CVE-2025-63947.md',
  },
  {
    id: 'CVE-2025-63948',
    type: 'Reflected XSS',
    target: 'phpMsAdmin v2.2',
    severity: 'High',
    desc: 'Cross-Site Scripting refletido via parâmetro dbname — execução de JavaScript arbitrário no contexto da sessão administrativa.',
    url: 'https://github.com/solonbarroso/vulnerability-research/blob/main/advisories/phpMsAdmin/CVE-2025-63948.md',
  },
  {
    id: 'CVE-2025-63949',
    type: 'Reflected XSS',
    target: 'yohanawi Hotel Management System',
    severity: 'High',
    desc: 'XSS refletido em múltiplos arquivos (room.php, bills.php, new_client.php +8) — parâmetros GET sem sanitização em toda a aplicação.',
    url: 'https://github.com/solonbarroso/vulnerability-research/blob/main/advisories/Hotel-Management-System/CVE-2025-63949.md',
  },
  {
    id: 'CVE-2025-63950',
    type: 'Insecure Deserialization',
    target: 'Twittodon',
    severity: 'Critical',
    desc: 'PHP Object Injection via download.php — parâmetro obj deserializado sem validação permite injeção de objetos arbitrários.',
    url: 'https://github.com/solonbarroso/vulnerability-research/blob/main/advisories/Twittodon/CVE-2025-63950.md',
  },
  {
    id: 'CVE-2025-63951',
    type: 'Insecure Deserialization',
    target: 'RPi-Jukebox-RFID',
    severity: 'Critical',
    desc: 'PHP Object Injection via rss-mp3.php — parâmetro rss exposto a deserialização não autenticada com acesso a operações de sistema de arquivos.',
    url: 'https://github.com/solonbarroso/vulnerability-research/blob/main/advisories/RPi-Jukebox-RFID/CVE-2025-63951.md',
  },
]

const SERVICES = [
  {
    icon: '🎯',
    title: 'EASM Shield',
    tag: 'SaaS · A partir de R$697/mês',
    desc: 'Plataforma SaaS de External Attack Surface Management. Mapeia subdomínios, portas expostas, Shadow IT e vulnerabilidades na sua infraestrutura externa — automaticamente, 24h.',
    cta: 'Ver demonstração',
    href: 'https://easm.solonsec.org',
    highlight: true,
  },
  {
    icon: '🔴',
    title: 'Red Team / Pentest',
    tag: 'A partir de R$5.000 / escopo',
    desc: 'Operações de Red Team com TTPs reais (MITRE ATT&CK), exploração de Active Directory, movimentação lateral e exfiltração. Pentest web, mobile, API e infraestrutura com relatório executivo e técnico.',
    cta: 'Solicitar proposta',
    href: '#contact',
    highlight: false,
  },
  {
    icon: '🛡️',
    title: 'vCISO Mensal',
    tag: 'Retainer a partir de R$3.000/mês',
    desc: 'Chief Information Security Officer fracional. Estratégia, gestão de riscos, políticas, Detection Engineering e relatórios para diretoria — sem contratar um CISO full-time.',
    cta: 'Conhecer o serviço',
    href: '#contact',
    highlight: false,
  },
  {
    icon: '📋',
    title: 'LGPD / DPO',
    tag: 'Projeto ou retainer',
    desc: 'Adequação à LGPD com diagnóstico, mapeamento de dados, criação de políticas e atuação como DPO (Encarregado de Dados) externo. Certificado LGPD + GDPR.',
    cta: 'Falar sobre LGPD',
    href: '#contact',
    highlight: false,
  },
  {
    icon: '⚙️',
    title: 'Automações de Segurança',
    tag: 'Por demanda · proposta personalizada',
    desc: 'Scripts e pipelines sob medida para o seu ambiente: integração de vulnerabilidades Tenable com base de patches (ex: SUSE), análise de compliance de hardware em massa, geração automática de relatórios semanais, acompanhamento de zero-days, análise de imagens e evidências forenses, e muito mais. Descreva o que precisa automatizar — montamos a proposta.',
    cta: 'Descrever minha necessidade',
    href: '#contact',
    highlight: false,
  },
]

const SEVERITY_COLOR: Record<string, string> = {
  Critical: 'text-red-400 border-red-400/30 bg-red-400/5',
  High: 'text-orange-400 border-orange-400/30 bg-orange-400/5',
}

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Portfolio] Contato de ${form.company || form.name}`)
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:suporte@solonsec.org?subject=${subject}&body=${body}`
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
            <a href="https://easm.solonsec.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">EASM Shield</a>
            <a href="#cves"     className="hover:text-brand transition-colors">CVEs</a>
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
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'linear-gradient(#00ff9d 1px,transparent 1px),linear-gradient(90deg,#00ff9d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="scan-line absolute inset-0 pointer-events-none h-32 w-full" />

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/5 text-brand text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-brand" />
            Disponível para novos projetos · Manaus, AM
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Solon Barroso
            <span className="block text-brand">Red Team · AppSec · EASM</span>
          </h1>

          <p className="text-textSub text-lg max-w-2xl mb-8 leading-relaxed">
            18+ anos em segurança ofensiva e defensiva. Red Team Operations, Pentest Web/Mobile/API,
            Vulnerability Research com{' '}
            <span className="text-brand font-semibold">5 CVEs publicados no MITRE</span>.
            Criador do <span className="text-brand font-semibold">EASM Shield</span>.
            40+ certificações internacionais. DPO certificado LGPD/GDPR.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#services"
               className="px-6 py-3 bg-brand text-bg font-bold rounded-lg hover:bg-brandDim
                          transition-all brand-glow text-sm">
              Ver serviços →
            </a>
            <a href="#cves"
               className="px-6 py-3 border border-red-500/50 text-red-400 rounded-lg
                          hover:border-red-400 hover:bg-red-400/5 transition-all text-sm font-mono">
              5 CVEs publicados
            </a>
            <a href="#contact"
               className="px-6 py-3 border border-border text-textSub rounded-lg
                          hover:border-brand hover:text-brand transition-all text-sm">
              Falar com consultor
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '18+', label: 'anos de experiência' },
              { value: '40+', label: 'certificações' },
              { value: '5',   label: 'CVEs no MITRE' },
              { value: 'DPO', label: 'LGPD & GDPR certificado' },
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
      <section id="services" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-brand text-xs font-mono mb-2">// serviços</p>
            <h2 className="text-3xl font-bold">O que ofereço</h2>
            <p className="text-textSub mt-2 max-w-xl">
              Segurança ofensiva e gestão de superfície de ataque para PMEs e empresas de médio porte.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map(s => (
              <div key={s.title}
                   className={`p-6 rounded-xl border transition-all group
                     ${s.highlight
                       ? 'border-brand/50 bg-brand/5 hover:bg-brand/10'
                       : 'border-border bg-bg hover:border-brand/30'}`}>
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
      <section id="easm" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand text-xs font-mono mb-2">// produto</p>
          <h2 className="text-3xl font-bold mb-4">EASM Shield</h2>
          <p className="text-textSub max-w-2xl mb-10 leading-relaxed">
            Plataforma SaaS de External Attack Surface Management desenvolvida com as mesmas
            ferramentas usadas em operações reais de Red Team.
          </p>

          <div className="grid sm:grid-cols-4 gap-3 mb-10">
            {[
              { n: '01', title: 'Descoberta Passiva', desc: 'Mapeia toda a superfície externa e Shadow IT — subdomínios, certificados e registros DNS' },
              { n: '02', title: 'Port Scan',          desc: 'Identifica serviços expostos nas 1.000 portas mais críticas sem disparar alertas' },
              { n: '03', title: 'Fingerprint',        desc: 'Stack tecnológico, banners de serviço e certificados SSL de cada ativo encontrado' },
              { n: '04', title: 'Risk Engine',        desc: 'Detecta takeovers, exposições e vulnerabilidades reais com score de risco 0-100' },
            ].map(p => (
              <div key={p.n} className="p-4 rounded-lg border border-border bg-surface">
                <div className="text-brand font-mono text-xs mb-2">{p.n}</div>
                <div className="font-semibold text-sm mb-1">{p.title}</div>
                <div className="text-textSub text-xs leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Card Demo Gratuito */}
          <a href="https://easm.solonsec.org" target="_blank" rel="noopener noreferrer"
             className="block mb-6 p-5 rounded-xl border border-brand/40 bg-brand/5 hover:bg-brand/10 transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-brand font-bold mb-1">🎯 EXPERIMENTE GRÁTIS</div>
                <div className="text-lg font-bold">Demo Gratuito — Scan do seu domínio</div>
                <div className="text-sm text-textSub mt-1">Resultados em ~5 minutos · Sem cadastro · Sem cartão</div>
              </div>
              <span className="text-brand text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-3 text-xs text-textSub">
              <span>✓ Mapa de subdomínios</span>
              <span>✓ Portas expostas</span>
              <span>✓ Shadow IT</span>
              <span>✓ Score de risco 0-100</span>
            </div>
          </a>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Starter',    price: 'R$697',   period: '/mês', domains: '3 domínios',  scans: 'Scan diário',   features: ['Dashboard executivo', 'Alertas por email', 'Relatório PDF'] },
              { name: 'Growth',     price: 'R$1.997', period: '/mês', domains: '10 domínios', scans: '4 scans/dia',   features: ['Tudo do Starter', 'API access', 'Webhooks', 'Análise IA PT-BR'], highlight: true },
              { name: 'Enterprise', price: 'R$5.497', period: '/mês', domains: 'Ilimitado',   scans: 'Scan contínuo', features: ['Tudo do Growth', 'SLA 99.9%', 'Onboarding dedicado'] },
            ].map(p => (
              <div key={p.name}
                   className={`p-6 rounded-xl border
                     ${(p as any).highlight ? 'border-brand bg-brand/5' : 'border-border bg-surface'}`}>
                {(p as any).highlight && (
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
                     ${(p as any).highlight
                       ? 'bg-brand text-bg hover:bg-brandDim'
                       : 'border border-border text-textSub hover:border-brand hover:text-brand'}`}>
                  Começar agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CVEs ── */}
      <section id="cves" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand text-xs font-mono mb-2">// vulnerability research</p>
          <h2 className="text-3xl font-bold mb-3">5 CVEs publicados no MITRE</h2>
          <p className="text-textSub mb-10 max-w-2xl">
            Pesquisador independente de vulnerabilidades. CVEs registrados e publicados no
            National Vulnerability Database (NVD/MITRE) em 2025.
          </p>

          <div className="space-y-4">
            {CVES.map(cve => (
              <div key={cve.id}
                   className="p-5 rounded-xl border border-border bg-bg hover:border-red-400/30 transition-all group">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <a href={cve.url} target="_blank" rel="noopener noreferrer"
                     className="font-mono font-bold text-brand hover:underline text-sm">
                    {cve.id}
                  </a>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold ${SEVERITY_COLOR[cve.severity]}`}>
                    {cve.severity}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-border text-textSub">
                    {cve.type}
                  </span>
                  <span className="text-xs text-muted font-mono">{cve.target}</span>
                </div>
                <p className="text-sm text-textSub leading-relaxed">{cve.desc}</p>
                <a href={cve.url} target="_blank" rel="noopener noreferrer"
                   className="text-xs text-muted hover:text-brand transition-colors mt-2 inline-block font-mono">
                  Ver advisory completo →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg border border-border bg-bg/50 flex flex-wrap gap-4 text-sm">
            <a href="https://github.com/solonbarroso/vulnerability-research"
               target="_blank" rel="noopener noreferrer"
               className="text-textSub hover:text-brand transition-colors font-mono">
              GitHub Research →
            </a>
            <a href="https://www.credly.com/users/solon-da-silva"
               target="_blank" rel="noopener noreferrer"
               className="text-textSub hover:text-brand transition-colors font-mono">
              Credly Badges →
            </a>
            <a href="https://tryhackme.com/p/solonbarroso"
               target="_blank" rel="noopener noreferrer"
               className="text-textSub hover:text-brand transition-colors font-mono">
              TryHackMe →
            </a>
            <a href="https://app.hackthebox.com/users/412815"
               target="_blank" rel="noopener noreferrer"
               className="text-textSub hover:text-brand transition-colors font-mono">
              HackTheBox →
            </a>
            <a href="https://www.credential.net/profile/solonbarrosodasilva16926/wallet"
               target="_blank" rel="noopener noreferrer"
               className="text-textSub hover:text-brand transition-colors font-mono">
              Credential.net →
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand text-xs font-mono mb-2">// sobre</p>
          <h2 className="text-3xl font-bold mb-8">Segurança ofensiva é o foco principal</h2>

          <div className="grid sm:grid-cols-2 gap-10 mb-12">
            <div>
              <p className="text-textSub leading-relaxed mb-4">
                Tecnólogo em Redes de Computadores com MBA em Gestão da Segurança da Informação
                e pós-graduações em Ethical Hacking, Forense Computacional e Segurança de Redes.
                Mais de 18 anos de trajetória em TI.
              </p>
              <p className="text-textSub leading-relaxed mb-4">
                <span className="text-text font-semibold">Segurança ofensiva é o foco central</span> —
                Red Team Operations com TTPs reais (MITRE ATT&CK), exploração de Active Directory,
                Red Team Infrastructure (C2, redirectors, OPSEC), Pentest Web, Mobile e API.
                Pesquisador com 5 CVEs publicados no MITRE.
              </p>
              <p className="text-textSub leading-relaxed mb-4">
                Do lado defensivo: Detection Engineering, Threat Hunting, criação de regras
                customizadas para SIEM/EDR e resposta a incidentes — o conhecimento ofensivo
                aplicado diretamente na construção de barreiras de defesa.
              </p>
              <p className="text-textSub leading-relaxed">
                Baseado em <span className="text-text font-medium">Manaus, AM</span>, atendo
                empresas em todo o Brasil remotamente e na região Norte presencialmente.
              </p>
            </div>

            {/* specialties */}
            <div className="space-y-4">
              {[
                { label: '⚔️ Ofensiva', items: 'Red Team Ops · AD Exploitation · Lateral Movement · Persistence · Exfiltration' },
                { label: '🌐 Web / API / Mobile', items: 'RCE · SQLi · XXE · Deserialization · OAuth/JWT · SSRF · Bypass WAF' },
                { label: '☁️ Cloud Red Team', items: 'AWS (S3, EC2, IAM) · Azure · GCP · Multi-Cloud (MCRTA)' },
                { label: '🏗️ Red Team Infra', items: 'C2 Setup · Redirectors · Phishing · OPSEC · Cloud Automation' },
                { label: '🔬 AppSec / DevSecOps', items: 'SAST/DAST/IAST · Semgrep · Tenable · Shift Left · CI/CD' },
                { label: '🛡️ Detection Engineering', items: 'Regras SIEM (Splunk, Wazuh, Elastic) · Threat Hunting · MITRE ATT&CK' },
                { label: '📊 SIEM / EDR', items: 'Splunk · Wazuh · Elastic · CrowdStrike · CarbonBlack' },
              ].map(s => (
                <div key={s.label} className="flex gap-3 items-start">
                  <span className="text-xs font-mono text-brand w-36 shrink-0 pt-0.5">{s.label}</span>
                  <span className="text-sm text-textSub">{s.items}</span>
                </div>
              ))}
            </div>
          </div>

          {/* cert wall */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-mono text-red-400 mb-3">⚔️ ofensiva</p>
              <div className="flex flex-wrap gap-2">
                {CERTS_OFFENSIVE.map(c => (
                  <span key={c} className="text-xs font-mono px-2 py-1 rounded border border-red-400/30 text-red-400 bg-red-400/5">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-blue-400 mb-3">🛡️ defesa</p>
              <div className="flex flex-wrap gap-2">
                {CERTS_DEFENSIVE.map(c => (
                  <span key={c} className="text-xs font-mono px-2 py-1 rounded border border-blue-400/30 text-blue-400 bg-blue-400/5">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-yellow-400 mb-3">📋 tech & governança</p>
              <div className="flex flex-wrap gap-2">
                {CERTS_GOV.map(c => (
                  <span key={c} className="text-xs font-mono px-2 py-1 rounded border border-yellow-400/30 text-yellow-400 bg-yellow-400/5">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-brand mb-3">🔍 tenable</p>
              <div className="flex flex-wrap gap-2">
                {CERTS_TENABLE.map(c => (
                  <span key={c} className="cert-badge">{c}</span>
                ))}
              </div>
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
                <span className="text-brand">suporte@solonsec.org</span>
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
                  <label className="text-xs text-muted font-mono mb-1 block">Email *</label>
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
               className="hover:text-brand transition-colors">LinkedIn ↗</a>
            <a href="https://github.com/solonbarroso"
               target="_blank" rel="noopener noreferrer"
               className="hover:text-brand transition-colors">GitHub ↗</a>
            <a href="mailto:suporte@solonsec.org"
               className="hover:text-brand transition-colors">suporte@solonsec.org</a>
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
            Red Team · AppSec · EASM · Manaus, AM, Brasil
          </span>
        </div>
      </footer>

    </div>
  )
}
