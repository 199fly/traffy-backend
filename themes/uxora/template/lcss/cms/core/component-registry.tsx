import Hero from "@/components/blocks/Hero";
import Pricing from "@/components/blocks/Pricing";

export const registry: Record<string, (props: any) => JSX.Element> = {
  "cmp.hero.v1": Hero,
  "cmp.pricing.v1": Pricing,
};
