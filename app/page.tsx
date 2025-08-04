import { BackgroundBeamsWithCollisionDemo } from "@/components/ui/demo";
import { ResourcesSection } from "@/components/ui/resources-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <BackgroundBeamsWithCollisionDemo />
      
      {/* Resources Section */}
      <ResourcesSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
