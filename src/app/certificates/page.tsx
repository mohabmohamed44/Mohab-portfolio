import BlurFade from "@/components/magicui/blur-fade";
import CertificateList from "@/components/certificate-list";

const BLUR_FADE_DELAY = 0.04;

export default function CertificatesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Certificates
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Continuous Learning Journey
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px]">
                A collection of certificates and achievements from my continuous learning journey in software development, competitive programming, and technology.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <CertificateList />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
