// Content for /tax-services. Kept as data so the FAQ text rendered on the page
// and the text inside the FAQPage JSON-LD come from one source.
//
// [BOBBY: three things in here are reasonable defaults, not facts I could verify
//  from the existing site. Confirm or correct before this page gets real traffic:
//   1. The entity types in FAQ 4 (S corp, partnership, LLC, sole prop).
//   2. The pricing process in FAQ 5. No dollar figures are stated anywhere.
//   3. FAQ 9, working alongside an owner's existing preparer.
//  Nothing on this page claims a credential. See the note in TaxServices.jsx.]

export const LAST_UPDATED = "November 6, 2026";
export const LAST_UPDATED_ISO = "2026-11-06";

export const INCLUDED = [
  {
    name: "Business and owner returns",
    detail: "The entity return and the personal return it flows into, prepared together. For most owner-led businesses those are one decision, not two, and splitting them across two desks is how deductions get missed.",
  },
  {
    name: "Year-round tax planning",
    detail: "The decisions that move a tax bill happen in June, not in April. Planning means looking at timing, structure, and purchases while you can still do something about them.",
  },
  {
    name: "Entity structure and owner compensation",
    detail: "Whether the entity you started with still fits, what an S election would actually save after payroll costs, and what reasonable compensation looks like for an owner who also does the work.",
  },
  {
    name: "Estimated tax payments",
    detail: "Payments sized to the income curve you actually have instead of four equal guesses. If your year is lopsided, so are the safe ways to pay it.",
  },
  {
    name: "Sales tax and payroll tax filings",
    detail: "Registrations, returns, and the multi-state question that follows the first employee or the first large out-of-state customer. These are the filings that generate notices when nobody owns them.",
  },
  {
    name: "Books the return can stand on",
    detail: "A return is only as good as the ledger behind it. If the books are behind or were never reconciled, cleanup comes first, scoped separately so you can see what it costs.",
  },
];

// The single biggest query this page is built to answer.
export const PLANNING_VS_PREP = [
  {
    axis: "When it happens",
    prep: "After the year has closed.",
    plan: "During the year, while decisions are still open.",
  },
  {
    axis: "The question it answers",
    prep: "What do I owe?",
    plan: "What can I change before I owe it?",
  },
  {
    axis: "What it works from",
    prep: "Last year's books and documents.",
    plan: "Your forecast, your entity structure, and what you intend to buy or build.",
  },
  {
    axis: "What it can still change",
    prep: "Nothing. The year is already written.",
    plan: "Entity type, owner compensation, purchase timing, retirement contributions, how estimates are paid.",
  },
  {
    axis: "What good looks like",
    prep: "Filed on time and filed correctly.",
    plan: "No surprise in April, and a bill that reflects choices you made on purpose.",
  },
];

export const WHO = [
  {
    name: "Contractors and trades",
    detail: "Retainage and progress billing put income and cash in different periods. Equipment, vehicles, and multi-state crews each carry their own filing question.",
  },
  {
    name: "Seasonal businesses",
    detail: "Deposits collected in one year for work delivered in the next, estimated payments against an income curve that is anything but even, and equipment bought in the month the account looks full.",
    href: "/seasonal-businesses",
    hrefLabel: "Read the seasonal tax guide",
  },
  {
    name: "Inventory and distribution",
    detail: "Cash sits in the warehouse while the tax treatment follows how inventory is valued and when it becomes an expense. The gap between the two is where owners get surprised.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    detail: "Thirty minutes, no cost. What the business does, how the money moves through it, and what went wrong last filing season.",
  },
  {
    step: "02",
    title: "Return and books review",
    detail: "We read your last filed return against your ledger. That is usually enough to find what was missed and to say whether anything is worth changing before the next one.",
  },
  {
    step: "03",
    title: "Scope and quote",
    detail: "You get the scope and the price before any work starts. Ongoing work is month to month, with no long-term contract.",
  },
  {
    step: "04",
    title: "Year-round rhythm",
    detail: "Planning conversations through the year, estimates paid on a schedule that fits your income, filings handled, and no December scramble.",
  },
];

// Answers are written to stand alone, because an AI engine will quote one
// without the question or the rest of the page around it. Deliberately no
// overlap with the eight on /seasonal-businesses.
export const FAQ = [
  {
    q: "What is included in business tax services?",
    a: "Business tax services cover the entity return, the owner's personal return, and the planning and filings that sit underneath both: estimated payments, sales tax, and payroll tax. Three Seeds treats the books as part of the work, because a return is only as reliable as the ledger it was built from.",
  },
  {
    q: "What is the difference between tax preparation and tax planning?",
    a: "Tax preparation reports what already happened. Tax planning changes what happens next. A preparer takes last year's numbers and files them correctly, which matters, but every decision that moved the bill was made months earlier. Planning looks at entity structure, timing, compensation, and purchases while there is still time to act.",
  },
  {
    q: "When is it worth moving from a once-a-year preparer to year-round tax work?",
    a: "When the size of the bill surprises you, when income swings from year to year, or when you are making decisions worth more than the preparation fee: buying equipment, changing entity type, hiring, or taking on debt. If your situation is simple and steady, a once-a-year preparer is the right answer and costs less.",
  },
  {
    q: "Which business types do you prepare taxes for?",
    a: "S corporations, partnerships, multi-member and single-member LLCs, and sole proprietors, along with the owner's personal return that flows from them. For owner-led businesses the entity return and the personal return are one decision rather than two, so they are planned and prepared together.",
  },
  {
    q: "How much do business tax services cost?",
    a: "Price is quoted after a short look at your last return and the current state of your books, and it is agreed before any work begins. Ongoing work runs month to month with no long-term contract. What drives the number is how many entities and states are involved and how far behind the books are.",
  },
  {
    q: "Can you handle taxes for a business in another state?",
    a: "Yes. Three Seeds is fully remote and works with owners nationwide. Multi-state exposure is its own tax question: payroll in a second state, sales into a second state, and property in a second state each create different filing obligations, and they do not all begin at the same threshold.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Your last filed business return, your last personal return, and access to your bookkeeping file. That is enough to see the structure, find what was missed, and tell you whether anything is worth changing before the next filing. The first conversation is thirty minutes and costs nothing.",
  },
  {
    q: "What if my books are behind or a mess?",
    a: "That is a common starting point rather than a problem. Cleanup comes first, because a return built on a ledger nobody reconciled just moves the error onto a filed document. Catch-up bookkeeping is scoped and priced separately from the return, so you can see what it costs before committing to it.",
  },
  {
    q: "Can you work alongside the accountant I already have?",
    a: "Sometimes. Some owners keep a preparer they trust and bring in Three Seeds for planning and controller work. Others move everything to one place so the tax plan and the cash plan come off the same set of books. Both arrangements work as long as it is clear who owns which decision.",
  },
];
