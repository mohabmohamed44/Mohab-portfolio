"use client";

import { Certificate } from "@/types/certificate";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Props {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: Props) {
  return (
    <Card className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Image Section */}
      <div className="relative aspect-video w-full bg-muted">
        <Image
          src={certificate.image_ as string}
          alt={certificate.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      </div>

      <CardHeader className="space-y-1 pt-6">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl font-bold">{certificate.title}</CardTitle>
          <Badge variant="secondary" className="mt-1">
            Certificate
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{certificate.issuer}</span>
          <span className="mx-2">•</span>
          <time dateTime={certificate.date}>{formatDate(certificate.date)}</time>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{certificate.description}</p>
      </CardContent>

      <CardFooter className="pt-6 border-t">
        <div className="flex w-full items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {certificate.link ? "View credential details" : "No external link available"}
          </p>
          
          {certificate.link && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      View Certificate
                      <span className="sr-only">Open in new tab</span>
                      →
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Opens in new tab</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
