import { Link } from "react-router-dom";
import { C } from "../theme";
import { LegalPage, H2, P, UL, Callout } from "../components/Legal";

const link = { color: C.accent, textDecoration: "none", borderBottom: `1px solid ${C.accent}44` };

export default function Eula() {
  return (
    <LegalPage
      label="Legal"
      number="06"
      title="End user license agreement."
      updated="October 20, 2026"
      intro="The terms that govern your use of the Three Seeds application, including the connection between Three Seeds and your QuickBooks Online company."
    >
      <H2>1. Who this is between</H2>
      <P>
        This agreement is between Three Seeds LLC ("Three Seeds", "we", "us") and the business
        that connects a QuickBooks Online company to our application ("you", "Client"). You
        accept it when you authorize the connection, and it applies for as long as the
        connection is live.
      </P>

      <H2>2. What the application does</H2>
      <P>
        Three Seeds is an accounting and advisory firm. The application is the pipe that gets
        your accounting data to us. It reads financial records from your QuickBooks Online
        company so we can produce the bookkeeping, controller, and part-time CFO work you have
        engaged us for. It is not a standalone software product and it is not sold separately.
      </P>

      <H2>3. Your license</H2>
      <P>
        We grant you a limited, non-exclusive, non-transferable, revocable right to access and
        use the application for your own internal business purposes for the term of your
        engagement with us. We keep all ownership of the application and everything in it.
      </P>

      <H2>4. What you may not do</H2>
      <UL items={[
        "Resell the application, sublicense it, or give access to anyone outside your business",
        "Reverse engineer, decompile, or try to derive the source code",
        "Use it to reach a QuickBooks company you are not authorized to access",
        "Work around access controls, rate limits, or security measures",
        "Use it in a way that violates your own agreement with Intuit",
      ]} />

      <H2>5. What you are responsible for</H2>
      <UL items={[
        "Having the authority to connect the QuickBooks company you connect",
        "The accuracy and completeness of the data in that company file",
        "Keeping your own Intuit credentials secure. We never ask for them and never need them.",
        "Telling us if you believe the connection has been compromised",
      ]} />

      <H2>6. Read-only commitment</H2>
      <Callout>
        We request the QuickBooks accounting scope, which is the narrowest scope available for
        this work. That scope technically permits writes. Our policy is that we do not use it
        that way. We read from your QuickBooks company. We do not create, modify, or delete
        records in it through the application.
      </Callout>

      <H2>7. Intuit is not a party to this</H2>
      <P>
        Intuit is not a party to this agreement and is not responsible for the application.
        Your use of QuickBooks Online is governed by your own agreement with Intuit. We are
        not responsible for Intuit's availability, pricing, or the accuracy of what their
        service returns to us.
      </P>

      <H2>8. Fees</H2>
      <P>
        There is no separate license fee for the application. It is included in your Three
        Seeds engagement, and your engagement letter governs what you pay for our services.
      </P>

      <H2>9. Privacy</H2>
      <P>
        What we read, where we store it, how long we keep it, and how you shut it off are all
        in our <Link to="/legal/privacy" style={link}>privacy policy</Link>, which is part of
        this agreement.
      </P>

      <H2>10. Term and termination</H2>
      <P>
        This agreement runs as long as the connection is live. You can disconnect at any time,
        from QuickBooks Online or from the Three Seeds connection dashboard, and you do not
        need our permission or our help to do it. We may suspend or end access if you breach
        this agreement or if we end the engagement. When the connection ends, we delete the
        tokens immediately and handle any data already pulled under the retention terms in the
        privacy policy.
      </P>

      <H2>11. No warranty</H2>
      <P>
        The application is provided as is. We do not warrant that it will be uninterrupted or
        error free, or that data retrieved through it will be complete, since that depends on
        what is in your QuickBooks company and on Intuit's service. This disclaimer covers the
        application only. It does not limit the professional standards we are held to for the
        accounting and advisory work itself.
      </P>

      <H2>12. Limitation of liability</H2>
      <P>
        To the extent the law allows, neither party is liable to the other for indirect,
        incidental, special, or consequential damages, or for lost profits, arising out of the
        application. Our total liability relating to the application is limited to the fees
        you paid us in the twelve months before the claim. Nothing here limits liability for
        fraud, willful misconduct, or anything else that cannot be limited by law.
      </P>

      <H2>13. Changes</H2>
      <P>
        If we change these terms, we will update the date at the top of this page. If a change
        is material, we will tell connected clients before it takes effect. Continuing to use
        the connection after that means you accept the new terms.
      </P>

      <H2>14. Governing law</H2>
      <P>
        This agreement is governed by the laws of the state in which Three Seeds LLC is
        organized, without regard to its conflict of laws rules.
      </P>

      <H2>15. Contact</H2>
      <P>
        Questions about these terms go through the{" "}
        <Link to="/contact" style={link}>contact page</Link>.
      </P>
    </LegalPage>
  );
}
