import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background px-6 py-16 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition mb-10">
        <ArrowLeft className="h-4 w-4" /> Back to site
      </Link>
      <h1 className="font-display font-bold text-4xl text-ink mb-4">Privacy Policy</h1>
      <p className="text-muted text-sm mb-8">Last updated: June 2026</p>
      <div className="prose prose-sm text-muted space-y-6">
        <p>Versatile Civil Contractors is committed to protecting your personal information. This policy explains how we collect, use, and safeguard data submitted through this website.</p>
        <h2 className="font-display font-semibold text-ink text-xl">Information We Collect</h2>
        <p>We collect information you provide directly — name, email, phone number, and project details — when you submit an enquiry form.</p>
        <h2 className="font-display font-semibold text-ink text-xl">How We Use It</h2>
        <p>We use your information solely to respond to your enquiry and provide a quote. We do not sell or share your data with third parties for marketing purposes.</p>
        <h2 className="font-display font-semibold text-ink text-xl">Contact</h2>
        <p>For privacy-related questions, contact us at info@versatilecivilcontractors.com.au</p>
      </div>
    </div>
  )
}
