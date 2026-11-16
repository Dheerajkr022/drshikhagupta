import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { constructMetadata } from "@/lib/metadata";

const service = servicesData.find((s) => s.slug === "adolescent-care")!;

export const metadata: Metadata = constructMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function AdolescentCarePage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}

