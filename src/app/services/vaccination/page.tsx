import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { constructMetadata } from "@/lib/metadata";

const service = servicesData.find((s) => s.slug === "vaccination")!;

export const metadata: Metadata = constructMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function VaccinationPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}

