import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Syringe,
  TrendingUp,
  Stethoscope,
  HeartHandshake,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceDetail } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceDetail;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "well-baby-care":
        return <Baby className="w-3.5 h-3.5 text-brandBlue" />;
      case "vaccination":
        return <Syringe className="w-3.5 h-3.5 text-brandBlue" />;
      case "growth-development":
        return <TrendingUp className="w-3.5 h-3.5 text-brandBlue" />;
      case "childhood-illness":
        return <Stethoscope className="w-3.5 h-3.5 text-brandBlue" />;
      case "adolescent-care":
        return <Sparkles className="w-3.5 h-3.5 text-brandBlue" />;
      case "parental-counselling":
        return <HeartHandshake className="w-3.5 h-3.5 text-brandBlue" />;
      case "breastfeeding-support":
        return <Heart className="w-3.5 h-3.5 text-brandBlue" />;
      default:
        return <Stethoscope className="w-3.5 h-3.5 text-brandBlue" />;
    }
  };

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue",
        featured
          ? "border-brandBlue/30 shadow-card ring-1 ring-brandBlue/15"
          : "border-borderSubtle hover:border-brandBlue/40 shadow-soft"
      )}
    >
      <div>
        {/* Real Photography Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brandBlue-pale/60">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

          {/* Floating Category Pill */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-navy shadow-soft border border-white/60">
              <span className="shrink-0">{getIcon(service.id)}</span>
              <span>{service.eyebrow.split("•")[0].trim()}</span>
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-3 left-3.5 right-3.5">
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm group-hover:text-brandCyan-light transition-colors font-heading">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3.5">
          <p className="text-xs sm:text-sm text-bodyText leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 pt-2 border-t border-borderSubtle/60">
            {(service.cardHighlights || service.whatWeCover.slice(0, 2)).map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-bodyText-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs font-semibold text-brandBlue group-hover:text-navy transition-colors border-t border-borderSubtle/40 mt-auto">
        <span>Clinical scope & details</span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
