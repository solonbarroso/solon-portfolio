import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solon Barroso | Cybersecurity Consultant · Manaus',
  description:
    '18 anos de experiência em cibersegurança. EASM, Pentest, vCISO, LGPD/DPO. Consultor especializado para empresas em Manaus e em todo o Brasil.',
  keywords: [
    'consultor cibersegurança Manaus',
    'pentest Manaus',
    'LGPD DPO Manaus',
    'EASM attack surface management Brasil',
    'segurança da informação Amazonas',
    'vCISO Brasil',
  ],
  openGraph: {
    title: 'Solon Barroso | Cybersecurity Consultant',
    description: '18 anos · 40+ certificações · EASM · Pentest · vCISO · LGPD/DPO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
