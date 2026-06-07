import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background px-6 py-16 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition mb-10">
        <ArrowLeft className="h-4 w-4" /> Back to site
      </Link>
      <h1 className="font-display font-bold text-4xl text-ink mb-4">Terms of Service</h1>
      <p className="text-muted text-sm mb-8">Last updated: June 2026</p>
      <div className="prose prose-sm text-muted space-y-6">
        <p>By using the Versatile Civil Contractors website, you agree to these terms. The content on this site is provided for general information only and does not constitute a contract or guarantee of service.</p>
        <h2 className="font-display font-semibold text-ink text-xl">Use of This Site</h2>
        <p>You may use this site for lawful purposes only. You must not misuse or attempt to gain unauthorised access to any part of this site.</p>
        <h2 className="font-display font-semibold text-ink text-xl">Enquiries</h2>
        <p>Submitting an enquiry form does not constitute a binding contract. All works are subject to a signed written agreement.</p>
        <h2 className="font-display font-semibold text-ink text-xl">Contact</h2>
        <p>For questions about these terms, contact info@versatilecivilcontractors.com.au</p>
      </div>
    </div>
  )
}
