import { Link } from "react-router";
import { ArrowRight, Shield, Clock, Award, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Top-tier tyres from leading global manufacturers",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick installation and professional maintenance",
    },
    {
      icon: Award,
      title: "Expert Advice",
      description: "Personalized recommendations from our specialists",
    },
    {
      icon: Zap,
      title: "Best Prices",
      description: "Competitive pricing with unmatched value",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/hero-image.png"
            alt="Premium tyres - Performance on Every Road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Drive with
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 animate-fade-in">
              Premium tyres for every vehicle. Performance you can trust, safety you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link
                to="/collection"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Collection
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 border border-zinc-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-orange-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-orange-500">New Gold Star Tyres</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              We're committed to providing the best tyre solutions with exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="inline-flex p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Ride?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Browse our extensive collection of premium tyres and find the perfect fit for your vehicle
            </p>
            <Link
              to="/collection"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View Collection
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
