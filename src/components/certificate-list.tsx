import BlurFade from "@/components/magicui/blur-fade";
import { certificateData } from "@/data/certificateData";
import CertificateCard from "@/components/certificate-card";

const BLUR_FADE_DELAY = 0.04;

export default function CertificateList() {
  return (
    <div className="flex flex-col gap-6">
      {certificateData.map((certificate, idx) => (
        <BlurFade key={certificate.title} delay={BLUR_FADE_DELAY * (3 + idx)}>
          <CertificateCard certificate={certificate} />
        </BlurFade>
      ))}
    </div>
  );
}
