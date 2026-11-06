// Content for /seasonal-businesses. Kept as data so the FAQ text rendered on
// the page and the text in the FAQPage JSON-LD come from one source and can
// never drift apart.

export const LAST_UPDATED = "November 6, 2026";
export const LAST_UPDATED_ISO = "2026-11-06";

export const SEGMENTS = [
  {
    name: "Tour, charter, and guided experience operators",
    squeeze: "Deposits land months before the trip, guides get paid the day of, and the boat payment never stops.",
  },
  {
    name: "Boat, equipment, and recreational rental companies",
    squeeze: "The fleet is bought and financed in spring and has to earn its whole year back by Labor Day.",
  },
  {
    name: "Outfitters and adventure businesses",
    squeeze: "Inventory and permits are paid up front, and a rained-out month cannot be made up later.",
  },
  {
    name: "Campgrounds, marinas, and resorts",
    squeeze: "Fixed property costs run all twelve months against revenue that shows up in four or five.",
  },
  {
    name: "Event venues and agritourism",
    squeeze: "Dates get booked a year out, and the deposits are usually spent long before the event happens.",
  },
  {
    name: "Landscaping, snow removal, and weather-driven services",
    squeeze: "Two seasons, two crews, and a cash gap in between that almost nobody budgets for.",
  },
];

export const PROBLEMS = [
  {
    // [link to pillar article: off-season cash flow forecasting]
    question: "I'm cash rich in July and short in February.",
    answer: "You need a forecast that runs past the season, not a bank balance.",
    detail: "The money sitting in the July account is already spoken for by February payroll, insurance, debt service, and next season's deposits. A forecast built on your own last twelve months shows the week the balance crosses zero while there is still time to move a payment or draw on a line. A bank balance only tells you about today.",
  },
  {
    // [link to pillar article: when customer deposits become taxable income]
    question: "When do customer deposits count as income?",
    answer: "Usually when you receive them, but your accounting method decides.",
    detail: "Cash-basis businesses report a deposit as income the day it clears, even for a trip eleven months out. Accrual-basis businesses may be able to defer part of an advance payment into the next tax year. Gift cards and refundable security deposits follow their own rules again. Getting this wrong moves income into the wrong year and changes what you owe.",
  },
  {
    // [link to pillar article: sales tax on tours, rentals, admissions, and lodging]
    question: "Do I owe sales tax on this?",
    answer: "It depends on the state and on exactly what you are selling.",
    detail: "Admissions, equipment rentals, lodging, and retail goods are often taxed under separate rules at separate rates inside the same state. A guided trip that includes a kayak and a campsite night can touch three of them at once. Operating in a second state usually means a second set of rules and a second registration.",
  },
  {
    // [link to pillar article: seasonal worker classification and payroll]
    question: "Are my seasonal staff employees or contractors?",
    answer: "Classification follows control, not the length of the season.",
    detail: "If you set the schedule, supply the gear, and direct how the work gets done, that points to employee no matter how short the season is. Tips add another layer, because reported tips affect payroll tax and your own reporting. The cost of getting it wrong is back taxes, penalties, and interest on every misclassified worker.",
  },
  {
    // [link to pillar article: year-end equipment purchases and depreciation timing]
    question: "Should I buy that boat, truck, or equipment before year-end?",
    answer: "Decide on the cash first, then the tax.",
    detail: "Section 179 and bonus depreciation are real, but a deduction returns a fraction of what you spend, never all of it. The question is whether the business needs the asset and whether the off-season plan survives the purchase. Timing matters too, because the asset generally has to be placed in service, not just ordered and paid for.",
  },
  {
    // [link to pillar article: reconciling 1099-K to your books]
    question: "My 1099-K doesn't match my books.",
    answer: "It is not supposed to, and the gap needs to be documented.",
    detail: "Booking platforms and payment processors report gross payments, which include refunds, chargebacks, sales tax you collected, tips passed through to guides, and the platform's own fees. Your books report net revenue. Reconcile the two before the return is filed and keep the worksheet. An unexplained gap is a notice waiting to happen.",
  },
];

export const LADDER = [
  {
    step: "01",
    title: "Tax return and cleanup",
    detail: "We get the books right and file a return that reflects how a seasonal business actually earns. Deposits recorded in the right period, the 1099-K reconciled to revenue, and depreciation that matches what is actually in service.",
  },
  {
    step: "02",
    title: "Year-round tax planning",
    detail: "Quarterly check-ins timed to your season instead of to the calendar. Pre-season setup for sales tax, payroll, and worker classification. Peak-season estimates sized to real income. Year-end planning while there is still time to act on it.",
  },
  {
    step: "03",
    title: "Pocket CFO",
    detail: "A cash flow forecast built on your QuickBooks data, plus monthly actuals-versus-forecast reviews. You find out what your off-season runway is in September, not in January when it is already gone.",
  },
];

export const CALENDAR = [
  {
    season: "Pre-season",
    items: [
      "Register and set up sales tax in every state you operate in",
      "Set up payroll and confirm worker classification before the first hire",
      "Choose your estimated payment approach for the year",
      "Set the cash reserve target the off-season will need",
    ],
  },
  {
    season: "Peak season",
    items: [
      "Track deposits as they land and record them in the right period",
      "Pay estimates using the annualized income installment method where it helps",
      "Watch margins weekly, because the season is too short to correct later",
      "Keep platform payouts reconciled as you go, not in April",
    ],
  },
  {
    season: "Post-season",
    items: [
      "Decide year-end purchases on the cash plan, not on the deduction",
      "Run year-end tax planning while there is still time to act",
      "Size what the off-season actually needs, month by month",
      "Review pricing against what the season actually cost to deliver",
    ],
  },
  {
    season: "Off-season",
    items: [
      "File 1099s for contractors",
      "Reconcile the 1099-K to the books and keep the worksheet",
      "Prepare and file the return",
      "Build next season's forecast before pre-season spending starts",
    ],
  },
];

// [BOBBY: review every FAQ answer below for accuracy before this gets traffic]
// These are general information only and are written as such. They are also
// published verbatim in the FAQPage JSON-LD, so edits here change both.
export const FAQ = [
  {
    q: "Are customer deposits taxable when I receive them?",
    a: "If you are on the cash basis, a deposit is generally income the day it hits your account, even if the trip is eleven months out. Accrual-basis businesses may be able to defer part of an advance payment into the following tax year. Which rule applies depends on your accounting method and how the payment is structured. Refundable security deposits are treated differently again.",
  },
  {
    q: "Do I have to charge sales tax on tours or rentals?",
    a: "It depends on the state and on exactly what you sell. Many states tax equipment rentals, admissions, and lodging under separate rules at separate rates, so a guided tour, a kayak rental, and a campsite night can be taxed three different ways inside one state. If you operate in more than one state, check each one separately.",
  },
  {
    q: "How do I pay estimated taxes when most of my income comes in a few months?",
    a: "Look at the annualized income installment method. The default estimated tax schedule assumes income arrives evenly across the year, which it does not for you, so four equal installments can either tie up cash in spring or leave you with an underpayment penalty. The annualized method sizes each payment to income actually earned in that period. It requires books that close on time.",
  },
  {
    q: "Are seasonal guides and crew employees or contractors?",
    a: "It turns on control, not on the length of the season or the job title. If you set the schedule, provide the equipment, direct how the work is done, and the work is core to your business, that points to employee. Calling someone a contractor because they only work twelve weeks does not make them one. Misclassification is one of the costliest mistakes a seasonal operator can make.",
  },
  {
    q: "Should I buy equipment before year-end to lower my taxes?",
    a: "Only if you need the equipment and your cash plan supports the purchase. Section 179 and bonus depreciation can pull a deduction forward, but the deduction is only a percentage of the money you spent. Spending the cash in December to save a fraction of it in tax is a bad trade if you come up short in February. Decide on the cash first.",
  },
  {
    q: "Why doesn't my 1099-K match my revenue?",
    a: "Because the platform reports gross payments and your books report net revenue. The 1099-K figure usually includes refunds, chargebacks, tips passed through to guides, sales tax you collected, and the platform's own fees, none of which are your revenue. Reconcile the form to your books before the return is filed, and keep the reconciliation on hand.",
  },
  {
    q: "How much cash do I need to get through the off-season?",
    a: "Enough to cover fixed costs, debt service, owner pay, and pre-season spending from the week revenue stops until the week it returns. That last part is what owners miss: deposits, payroll, and inventory for next season have to be funded before the first customer pays. A rule of thumb will not give you the number. A forecast built on your own last twelve months will.",
  },
  {
    q: "What is the difference between a tax preparer and a Part Time CFO for a seasonal business?",
    a: "A preparer reports what already happened. A Part Time CFO tells you what is coming and helps you act on it. The preparer files an accurate return in March for a year that is already closed. The CFO work is forecasting your off-season runway in September, sizing estimated payments to your actual season, and deciding in October whether the truck purchase helps or hurts.",
  },
];
