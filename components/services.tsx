import { Section } from "@/components/craft";
import UXIcon from "@/components/icons/uxIcon";
import SEOIcon from "./icons/seoIcon";
import FastTruckIcon from "./icons/fastTruckIcon";

// make div component to use for each service with icon, title, and description
function Service({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ReactElement<{ size: number }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex px-2 md:px-8 py-6 gap-4 items-start">
      <div>{Icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    // <Section className="bg-accent/50">
    <Section className="services-gradient mb-3">
      <div className="xl:flex px-6 lg:px-36">
        <div className="flex-1">
          <Service
            icon={<UXIcon />}
            title="User Experience Design"
            description="Develop a modern, professional looking website that converts visitors into customers."
          />
        </div>
        <div className="flex-1 md:border-r md:border-l">
          <Service
            icon={<SEOIcon />}
            title="SEO Performant Sites"
            description="Implement Search Engine Optimization (SEO) so that your site ranks well and users can find you, without ongoing fees."
          />
        </div>
        <div className="flex-1">
          <Service
            icon={<FastTruckIcon />}
            title="Speed Optimization"
            description="Ensure your site loads quickly and efficiently, providing users with a seamless, professional experience."
          />
        </div>
      </div>
    </Section>
  );
}
