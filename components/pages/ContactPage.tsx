"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";
import { FacebookIcon, YoutubeIcon, GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { useContent } from "@/lib/useContent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, PageHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { BookingForm } from "@/components/BookingForm";

/**
 * Contact page: honest contact details (LinkedIn is an editable
 * placeholder — no URL invented), the WhatsApp-routed contact form,
 * the session-booking form, and the Open to Opportunities section.
 */
export function ContactPage() {
  const c = useContent();
  const contact = c.contact;

  function socialIcon(label: string) {
    switch (label) {
      case "Facebook":
        return <FacebookIcon size={20} />;
      case "YouTube":
        return <YoutubeIcon size={20} />;
      case "GitHub":
        return <GithubIcon size={20} />;
      case "WhatsApp":
        return <MessageCircle size={20} aria-hidden="true" />;
      case "LinkedIn":
        return <LinkedinIcon size={20} />;
      default:
        return null;
    }
  }

  return (
    <>
      <Nav />
      <main id="main">
        <PageHeader label={contact.label} heading={contact.heading} intro={contact.intro} />

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-8 lg:grid-cols-5">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="heading-3">{c.ui.contactInfoHeading}</h2>
              <p className="body-2 mt-4 leading-relaxed">{contact.description}</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-body hover:text-ink">
                    <span className="icon-tile !h-11 !w-11">
                      <Mail size={20} aria-hidden="true" />
                    </span>
                    <span className="title-2 break-all">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-body hover:text-ink">
                    <span className="icon-tile !h-11 !w-11">
                      <MessageCircle size={20} aria-hidden="true" />
                    </span>
                    <span className="title-2">{contact.whatsappDisplay}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-body">
                  <span className="icon-tile !h-11 !w-11">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <span className="title-2">{c.personal.location}</span>
                </li>
                {contact.socials.map((s) =>
                  s.url ? (
                    <li key={s.label}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-body hover:text-ink">
                        <span className="icon-tile !h-11 !w-11">{socialIcon(s.label)}</span>
                        <span className="title-2 break-all">{s.handle ?? s.label}</span>
                      </a>
                    </li>
                  ) : (
                    <li key={s.label} className="flex items-center gap-3 text-muted">
                      <span className="icon-tile !h-11 !w-11">{socialIcon(s.label)}</span>
                      <span>
                        <span className="title-2 block text-muted">{s.label}</span>
                        <span className="caption-1">{c.ui.linkedInPlaceholder}</span>
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Session booking */}
        <Section id="booking" label={contact.label} heading={contact.bookingHeading} intro={contact.bookingIntro} band>
          <div className="mx-auto max-w-[720px]">
            <BookingForm />
          </div>
        </Section>

        {/* Open to opportunities */}
        <Section id="opportunities" label={c.careerInterests.label} heading={c.careerInterests.heading} intro={c.careerInterests.intro}>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="card">
              <h3 className="heading-4">{c.ui.opportunitiesRoles}</h3>
              <ul className="mt-4 space-y-2">
                {c.careerInterests.roles.map((r) => (
                  <li key={r} className="body-3 flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3 className="heading-4">{c.ui.opportunitiesSectors}</h3>
              <ul className="mt-4 space-y-2">
                {c.careerInterests.sectors.map((s) => (
                  <li key={s} className="body-3 flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3 className="heading-4">{c.ui.opportunitiesHigherEd}</h3>
              <ul className="mt-4 space-y-2">
                {c.careerInterests.higherEducation.map((h) => (
                  <li key={h} className="body-3 flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
