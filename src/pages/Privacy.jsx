import { Link } from "react-router-dom";
import { C } from "../theme";
import { LegalPage, H2, P, UL, Callout } from "../components/Legal";

const link = { color: C.accent, textDecoration: "none", borderBottom: `1px solid ${C.accent}44` };

export default function Privacy() {
  return (
    <LegalPage
      label="Legal"
      number="07"
      title="Privacy policy."
      updated="October 20, 2026"
      intro="What we collect, what we do with it, and how you shut it off. This covers both the threeseeds.io website and the Three Seeds application that connects to QuickBooks Online."
    >
      <H2>1. Who we are</H2>
      <P>
        Three Seeds LLC provides bookkeeping, controller, and part-time CFO services to
        owner-operated businesses. This policy explains how we handle information from our
        website and from any QuickBooks Online company you connect to our application.
      </P>

      <H2>2. What we collect from the website</H2>
      <P>
        If you submit the contact form, we collect the name, email address, company name,
        revenue range, and message you enter. Our contact form is processed by Formspree,
        which delivers the submission to us and stores a copy. We also receive standard
        web server logs, including IP address, browser type, and pages requested.
      </P>

      <H2>3. What we read from QuickBooks Online</H2>
      <P>
        If you connect a QuickBooks Online company, we request the accounting scope
        (com.intuit.quickbooks.accounting) and read only what we need to do your accounting
        and advisory work:
      </P>
      <UL items={[
        "Company profile, settings, and chart of accounts",
        "General ledger transactions and journal entries",
        "Customers, vendors, and employees as they appear on those transactions",
        "Invoices, bills, payments, credit memos, and deposits",
        "Standard financial reports: profit and loss, balance sheet, cash flow, and accounts receivable and payable aging",
      ]} />

      <H2>4. Read-only by policy</H2>
      <Callout>
        The accounting scope is the narrowest scope Intuit offers for this kind of work,
        and it technically permits writes. Our policy is that we do not use it that way.
        The application reads from your QuickBooks company. It does not create, modify,
        or delete records there.
      </Callout>
      <P>
        We do not request the payroll or payments scopes. We never ask for, receive, or
        store your Intuit username or password. Authorization happens on Intuit's own
        sign-in screen, and we only receive a token afterward.
      </P>

      <H2>5. What we do with it</H2>
      <UL items={[
        "Prepare your financial statements, reconciliations, forecasts, and advisory deliverables",
        "Answer your questions about your numbers",
        "Operate, secure, and troubleshoot the application",
      ]} />
      <P>
        We do not sell your information. We do not share it with advertisers. We do not use
        your QuickBooks data to market to you or to anyone else.
      </P>

      <H2>6. Service providers</H2>
      <P>
        We use third-party providers to host the application, store data, and deliver email.
        They process your information only to provide those services to us, under contract,
        and not for their own purposes. Our website contact form is processed by Formspree.
        We will disclose any provider that has access to QuickBooks data on request.
      </P>

      <H2>7. Where tokens live and how they are protected</H2>
      <P>
        The connection between Three Seeds and your QuickBooks company is held as an access
        token and a refresh token. Those tokens are stored server-side in our connection
        service. They are encrypted at rest, transmitted only over TLS, never written to
        application logs, and never stored in your browser. Access is limited to Three Seeds
        personnel who need it to do your work.
      </P>

      <H2>8. How long we keep things</H2>
      <UL items={[
        "Tokens: deleted as soon as you disconnect, or as soon as Intuit revokes them.",
        "QuickBooks data we have pulled: kept for the duration of your engagement and for 30 days after it ends, then deleted.",
        "Financial statements, workpapers, and tax-related records: retained for seven years, which is the standard retention period for accounting records.",
        "Website contact form submissions: retained while we are in contact and deleted when the inquiry is closed.",
      ]} />

      <H2>9. How to disconnect</H2>
      <P>
        You can end our access at any time, two ways, and you do not need to ask us first:
      </P>
      <UL items={[
        "From QuickBooks Online: open Settings, then Apps or your Intuit account, find Three Seeds, and choose Disconnect.",
        "From the Three Seeds connection dashboard: open the connection and choose Disconnect.",
      ]} />
      <P>
        Either route revokes the token immediately, and we delete our copy. Data we already
        pulled is handled under the retention periods in section 8. If you want that deleted
        sooner, ask and we will do it, subject to records we are required to retain.
      </P>

      <H2>10. Your rights</H2>
      <P>
        You can ask us what we hold about you, ask us to correct it, or ask us to delete it.
        Reach us through the <Link to="/contact" style={link}>contact page</Link> and we will
        respond within 30 days. Depending on where you are located, you may have additional
        rights under state or national privacy law, and we will honor them.
      </P>

      <H2>11. Security</H2>
      <P>
        We protect your information with encryption in transit and at rest, access controls,
        and least-privilege practices. No system is perfectly secure. If a breach affects
        your data, we will tell you promptly and tell you what we are doing about it.
      </P>

      <H2>12. Children</H2>
      <P>
        Our services are for businesses. They are not directed to anyone under 18, and we do
        not knowingly collect information from children.
      </P>

      <H2>13. Changes to this policy</H2>
      <P>
        If we change this policy, we will update the date at the top of this page. If a
        change materially affects how we handle your QuickBooks data, we will tell connected
        clients directly before it takes effect.
      </P>

      <H2>14. Contact</H2>
      <P>
        Questions about this policy, or about data we hold, go through the{" "}
        <Link to="/contact" style={link}>contact page</Link>. See also our{" "}
        <Link to="/legal/eula" style={link}>end user license agreement</Link>.
      </P>
    </LegalPage>
  );
}
