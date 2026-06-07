import { DATA } from "@/data/resume";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}/me.png`,
    jobTitle: "Software Engineer",
    description: DATA.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
    ],
    alumniOf: DATA.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.school,
      url: edu.href,
    })),
    knowsAbout: DATA.skills,
    worksFor: DATA.work.map((work) => ({
      "@type": "Organization",
      name: work.company,
      url: work.href,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
