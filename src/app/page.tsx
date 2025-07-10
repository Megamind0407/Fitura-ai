import TerminalOverlay from "@/components/TerminalOverlay";
import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-x-hidden">
      <section className="relative z-10 py-12 md:py-16 lg:py-20 flex-grow">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            <div className="absolute -top-8 -left-4 w-32 h-32 border-l-2 border-t-2 border-border hidden lg:block pointer-events-none" />

            <div className="lg:col-span-7 space-y-6 lg:space-y-8 relative order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <div className="mb-1">
                  <span className="text-foreground">Transform</span>
                </div>
                <div className="mb-1">
                  <span className="text-primary">Your Body</span>
                </div>
                <div className="mb-1">
                  <span className="text-foreground">With Advanced</span>
                </div>
                <div>
                  <span className="text-foreground">AI</span>
                  <span className="text-primary"> Technology</span>
                </div>
              </h1>

              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 my-6" />

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Talk to our AI assistant and get personalized diet plans and
                workout routines designed just for you
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 lg:gap-10 py-4 lg:py-6 font-mono">
                <div className="flex flex-col text-center">
                  <div className="text-xl lg:text-2xl text-primary font-bold">500+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    ACTIVE USERS
                  </div>
                </div>
                <div className="h-8 lg:h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="flex flex-col text-center">
                  <div className="text-xl lg:text-2xl text-primary font-bold">3min</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    GENERATION
                  </div>
                </div>
                <div className="h-8 lg:h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="flex flex-col text-center">
                  <div className="text-xl lg:text-2xl text-primary font-bold">100%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    PERSONALIZED
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <Link
                    href="/generate-program"
                    className="flex items-center justify-center font-mono"
                  >
                    Build Your Program
                    <ArrowRightIcon className="ml-2 size-4 lg:size-5" />
                  </Link>
                </Button>
              </div>
            </div>

            
            <div className="lg:col-span-5 relative order-1 lg:order-2 mb-8 lg:mb-0">
              
              <div className="absolute -inset-4 lg:-inset-6 pointer-events-none hidden lg:block">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border/40" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border/40" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border/40" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border/40" />
              </div>

              <div className="relative aspect-square w-full max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
                <div className="relative overflow-hidden rounded-lg bg-cyber-black shadow-2xl">
                  <img
                    src="/hero-ai3.png"
                    alt="AI Fitness Coach"
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none opacity-70" />

                  
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                    <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
                  </div>

                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>

                <TerminalOverlay />
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserPrograms />
    </div>
  );
};

export default HomePage;