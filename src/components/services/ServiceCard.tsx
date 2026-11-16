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
        return <Baby className="w-4 h-4 text-white" />;
      case "vaccination":
        return <Syringe className="w-4 h-4 text-white" />;
      case "growth-development":
        return <TrendingUp className="w-4 h-4 text-white" />;
      case "childhood-illness":
        return <Stethoscope className="w-4 h-4 text-white" />;
      case "adolescent-care":
        return <Sparkles className="w-4 h-4 text-white" />;
      case "parental-counselling":
        return <HeartHandshake className="w-4 h-4 text-white" />;
      case "breastfeeding-support":
        return <Heart className="w-4 h-4 text-white" />;
      default:
        return <Stethoscope className="w-4 h-4 text-white" />;
    }
  };

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-card overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue",
        featured
          ? "border-brandBlue/40 ring-1 ring-brandBlue/20 shadow-card"
          : "border-borderSubtle hover:border-brandBlue/50 shadow-soft"
      )}
    >
      <div>
        {/* Real Photography Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brandBlue-pale">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />

          {/* Floating Icon Pill */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brandBlue shadow-soft flex items-center justify-center">
              {getIcon(service.id)}
            </div>
            <span className="px-2.5 py-1 rounded-pill bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-navy shadow-soft">
              {service.eyebrow.split("&")[0]}
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-3.5 left-4 right-4">
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm group-hover:text-brandCyan-light transition-colors">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-bodyText leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Quick bullet points */}
          <div className="space-y-1.5 pt-1 border-t border-borderSubtle/60">
            {service.whatWeCover.slice(0, 2).map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-bodyText-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="px-5 sm:px-6 pb-5 pt-2">
        <div className="flex items-center justify-between text-xs font-bold text-brandBlue group-hover:text-white transition-colors py-2.5 px-3.5 rounded-element bg-brandBlue-pale/60 group-hover:bg-brandBlue">
          <span>Explore Consultation Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
