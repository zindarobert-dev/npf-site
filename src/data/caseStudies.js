export const caseStudies = [
  {
    slug: "finance-command-system",
    title: "A Finance Command System for a Subscription Platform",
    atGlance: "Automated every finance function outside of bookkeeping",
    industry: "Wellness / online services platform",
    engagement: "Part Time CFO",
    type: "Finance transformation & custom software",
    summary: "Consolidated historical financials and built a custom finance-ops app that automates revenue recognition, contractor payouts, and forecasting for a subscription model.",
    challenge: "A growth-stage company running a fully remote team was managing its finances across QuickBooks Online and a separate platform-management system. The setup created constant friction. Recognizing revenue required manual journal entries every period, and the same underlying data was needed to calculate what the company owed the contractors delivering services on its platform. The business also had no forecasting capability built for the way it actually made money, a subscription model with several distinct plan types that new customers signed up for. Leadership was making scaling decisions without a clear, forward-looking financial picture.",
    approach: [
      "Serving as Part Time CFO, I went beyond advising and built the tooling the business needed. I consolidated the company's historical financials and designed a custom financial-operations app on a modern stack (Vercel, Supabase, GitHub) that automates every finance function outside of bookkeeping.",
      "Inside the app, I built a forecasting engine comparable to Jirav but tailored to the company's reality, designed to capture the unique subscription types and plan combinations new businesses encounter on the platform. I automated the journal entries required for revenue recognition and the calculations that determine contractor payouts, replacing slow, error-prone manual work with reliable processes. I also built a client meeting hub that logs every meeting, drafts follow-ups, suggests the next agenda, and turns needs into automated to-dos.",
    ],
    results: "Leadership gained a single source of truth for historical performance plus forward-looking forecasts built specifically for their subscription model. Revenue recognition and contractor-payment calculations became automated and accurate, eliminating recurring manual journal-entry work. The remote team gained dependable, real-time financial visibility, replacing spreadsheets and guesswork with a durable, custom-fit system that runs itself and continues to support planning and scaling decisions.",
  },
  {
    slug: "asset-register",
    title: "A $10M+ Asset Register, Rebuilt as a Custom App",
    atGlance: "$10M+ tracked across 200+ assets",
    industry: "Oil & gas",
    engagement: "Controller / CFO support",
    type: "Custom software & financial reporting",
    summary: "Rebuilt a drifted fixed-asset register as a custom application: every asset's serial number, invoices, depreciation, and fair market value reconciled to the books on demand.",
    challenge: "An equipment-intensive oil & gas operator had accumulated a large, complex fixed-asset base over years of growth, a register exceeding $10M spread across more than 200 individual pieces of equipment. The records had drifted out of order. Asset detail was incomplete, classifications were inconsistent, and depreciation could no longer be trusted. Because fixed assets and depreciation flow directly into both financial statements and tax filings, the unreliable register undermined confidence in the company's reported numbers and made capital decisions harder than they needed to be.",
    approach: [
      "Rather than deliver a one-time spreadsheet cleanup, I built a custom application to track all 200+ pieces of equipment and keep them accurate going forward. For any asset, the client can drill into its serial number, original invoices, depreciation schedule, and fair market value, all reconciled directly to the books.",
      "Standing the app up meant validating every asset, correcting classifications, and rebuilding depreciation schedules so they were accurate and defensible, aligned to support both financial reporting and tax depreciation. The result turned a recurring source of uncertainty into a durable system the business owns.",
    ],
    results: "The client ended up with an accurate, audit-ready fixed-asset register and dependable depreciation, now backed by a tool that makes every asset's history transparent on demand. The reliability of their financial statements and tax positions improved measurably, and leadership could finally trust their reported asset base when making capital and planning decisions.",
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find(cs => cs.slug === slug);
}
