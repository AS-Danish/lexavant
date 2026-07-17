import { useState, useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);
  const [hasRead, setHasRead] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasAgreed = localStorage.getItem("lexavant_disclaimer_agreed");
    if (!hasAgreed) {
      if (document.body.classList.contains("reveal-finished")) {
        setOpen(true);
      } else {
        window.addEventListener("reveal-finished", () => setOpen(true), { once: true });
      }
    }
  }, []);

  // Check on open if the content is already fully visible
  useEffect(() => {
    if (open && scrollRef.current) {
      if (scrollRef.current.scrollHeight <= scrollRef.current.clientHeight) {
        setHasRead(true);
      }
    }
  }, [open]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    // Added a 10px buffer to account for rounding errors in scroll position
    if (scrollHeight - scrollTop <= clientHeight + 10) {
      setHasRead(true);
    }
  };

  const handleAgree = () => {
    localStorage.setItem("lexavant_disclaimer_agreed", "true");
    setOpen(false);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="max-w-3xl max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-sm border-gold/20 shadow-noir">
        <AlertDialogHeader className="px-6 py-6 border-b border-border bg-card">
          <AlertDialogTitle className="font-display text-2xl text-gold">IMPORTANT DISCLAIMER</AlertDialogTitle>
        </AlertDialogHeader>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto p-6 text-sm text-foreground/90 font-sans"
        >
          <div className="space-y-6">
            <section>
              <h3 className="font-semibold text-base mb-2">User Acknowledgement</h3>
              <p className="mb-2">By clicking 'I Agree' and proceeding to this website, you acknowledge and confirm that:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>You are accessing this website voluntarily, of your own accord, for the purpose of obtaining general information about Lexavant LLP and its areas of practice.</li>
                <li>No advertisement, communication, solicitation, invitation, or inducement of any kind has been made by Lexavant LLP or any of its members, partners, or associates to encourage you to visit this website or to seek legal services through it.</li>
                <li>Any information you obtain or download from this website is entirely at your own volition, and your access to, transmission from, or use of this website does not constitute, and is not intended to constitute, the creation of a lawyer–client relationship between you and Lexavant LLP.</li>
                <li>You have read and understood the disclaimer set out below and agree to be bound by its terms.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">About This Website</h3>
              <p className="text-muted-foreground">This website (www.lexavant.com) is owned and operated by Lexavant LLP and is made available solely for general informational purposes. The content published on this website is not intended to constitute legal advice, and should not be construed or relied upon as such.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">No Legal Advice</h3>
              <p className="text-muted-foreground">Nothing on this website constitutes legal advice or creates, or is intended to create, a lawyer-client relationship between Lexavant LLP and any visitor or recipient. Legal advice is provided only upon formal engagement, following the execution of an engagement letter and the completion of applicable conflict-of-interest checks in accordance with our internal policies. Readers and visitors to this website should not act, or refrain from acting, on the basis of any content or information contained herein without first seeking advice from qualified legal counsel licensed to practise in the relevant jurisdiction.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">No Solicitation</h3>
              <p className="text-muted-foreground">As per the rules of the Bar Council of India, advocates are not permitted to advertise or solicit work. Nothing on this website constitutes an advertisement, solicitation, or invitation to establish a professional relationship. Access to this website is provided solely at your request, for informational purposes.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">No Warranty</h3>
              <p className="text-muted-foreground">While Lexavant LLP endeavours to ensure that the information on this website is accurate and up to date, we make no representation or warranty, express or implied, as to the accuracy, completeness, or currency of any content herein. Lexavant LLP accepts no liability for any loss, damage, or consequence arising from reliance on information contained on this website, including any content that may be outdated as a result of legislative, regulatory, or judicial developments.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">Third-Party Links</h3>
              <p className="text-muted-foreground">This website may contain links to third-party websites or resources. Such links are provided for convenience only. Lexavant LLP does not endorse, control, or take responsibility for the content, accuracy, or availability of any third-party website, and the inclusion of a link does not imply any affiliation or recommendation.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">Jurisdiction</h3>
              <p className="text-muted-foreground">This website and its contents are governed by and shall be construed in accordance with the laws of India. Any dispute arising in relation to this website shall be subject to the exclusive jurisdiction of the courts at Mumbai.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">Confidentiality</h3>
              <p className="text-muted-foreground">Unsolicited information or queries submitted through this website will not be treated as confidential and will not give rise to any obligation on the part of Lexavant LLP. A lawyer–client relationship and the associated confidentiality obligations arise only upon formal engagement.</p>
              <p className="mt-2 text-foreground font-medium">By proceeding, you confirm that you have read, understood, and agreed to the above.</p>
            </section>
          </div>
        </div>
        
        <AlertDialogFooter className="px-6 py-4 border-t border-border bg-card">
          <AlertDialogAction 
            onClick={handleAgree} 
            disabled={!hasRead}
            className="w-full sm:w-auto bg-gold hover:bg-gold-soft text-bone font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {hasRead ? "I Agree" : "Please scroll to read"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
