import HeroSection from "@/components/HeroSection";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function HomePage() {
  return (
    <main>
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>
    </main>
  );
}
