import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BuyingGuidesPage = () => {
  const buyingSteps = [
    {
      title: "Define Your Objective",
      description: "Is it for long-term investment, second home, or resale short-term? Your objective decides the area and plot type you must choose.",
      icon: "🎯",
      step: "Step 1",
      details: [
        "Long-term Investment: Focus on areas with strong growth potential",
        "Second Home: Consider lifestyle factors and connectivity",
        "Short-term Resale: Look for emerging markets with quick appreciation"
      ]
    },
    {
      title: "Select the Perfect Location",
      description: "We assist you in shortlisting according to your goal – from CIDCO NAINA TPS-approved plots in Panvel to weekend homes in Karjat or upscale plots in Khalapur, we assist you with all the feasible options.",
      icon: "📍",
      step: "Step 2",
      details: [
        "Panvel: CIDCO NAINA TPS-approved plots with airport connectivity",
        "Khalapur: Upscale plots with expressway access",
        "Karjat: Weekend homes in scenic locations"
      ]
    },
    {
      title: "Check Legal Documents",
      description: "Always make sure the plot is CIDCO NAINA TPS-approved. We assist you in checking title documents, zone classification, and verify all clearances.",
      icon: "📋",
      step: "Step 3",
      details: [
        "Verify CIDCO NAINA TPS approval status",
        "Check title documents and ownership history",
        "Verify zone classification and development permissions",
        "Ensure all clearances are in place"
      ]
    },
    {
      title: "Schedule Site Visits",
      description: "There's nothing quite like seeing for yourself. We arrange site visits so you can assess connectivity, topography, potential, and general surroundings.",
      icon: "👁️",
      step: "Step 4",
      details: [
        "Assess physical connectivity and accessibility",
        "Evaluate topography and soil conditions",
        "Check surrounding infrastructure and amenities",
        "Understand local development potential"
      ]
    },
    {
      title: "Seal the Deal and Register",
      description: "When pleased, we help negotiate, plan payments, write up agreements, and register the land legally.",
      icon: "🤝",
      step: "Step 5",
      details: [
        "Negotiate the best price and terms",
        "Plan payment structure and financing",
        "Draft and review legal agreements",
        "Complete legal registration process"
      ]
    }
  ];

  const locationGuides = [
    {
      title: "Panvel - The Gateway to Navi Mumbai",
      description: "Panvel offers excellent connectivity and is set to become a major commercial hub with the new airport and metro connectivity.",
      highlights: ["New Airport Development", "Metro Connectivity", "Commercial Hub", "CIDCO NAINA TPS"],
      priceRange: "₹15,000 - ₹35,000 per sq ft",
      bestFor: "Long-term Investment, Commercial Development"
    },
    {
      title: "Khalapur - Premium Residential Destination",
      description: "Known for its scenic beauty and proximity to Mumbai-Pune Expressway, Khalapur presents unique investment opportunities in residential and commercial developments.",
      highlights: ["Mumbai-Pune Expressway", "Scenic Location", "Growing Infrastructure", "Premium Developments"],
      priceRange: "₹12,000 - ₹25,000 per sq ft",
      bestFor: "Premium Residential, Weekend Homes"
    },
    {
      title: "Karjat - Nature's Paradise",
      description: "A perfect blend of urban convenience and natural beauty, Karjat is emerging as a preferred destination for weekend homes and long-term investments.",
      highlights: ["Natural Beauty", "Weekend Homes", "Investment Growth", "Eco-Tourism"],
      priceRange: "₹8,000 - ₹18,000 per sq ft",
      bestFor: "Weekend Homes, Eco-Tourism"
    }
  ];

  const essentialChecklist = [
    {
      category: "Legal Documents",
      items: [
        "Title Deed (7/12 Extract)",
        "Encumbrance Certificate",
        "Property Tax Receipts",
        "NAINA TPS Approval Letter",
        "Survey Number & Village Map"
      ]
    },
    {
      category: "Physical Verification",
      items: [
        "Site Visit and Boundary Check",
        "Connectivity Assessment",
        "Infrastructure Availability",
        "Future Development Plans",
        "Neighborhood Analysis"
      ]
    },
    {
      category: "Financial Planning",
      items: [
        "Total Investment Calculation",
        "Registration Charges",
        "Stamp Duty Estimation",
        "Property Tax Assessment",
        "Development Cost Planning"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">BUYING GUIDES</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Buying a piece of land, particularly in a controlled area such as NAINA, demands a roadmap. Our comprehensive buying guide helps you walk the right path and steer clear of potential pitfalls.
            </p>
          </div>

          {/* Buying Steps */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Step-by-Step Buying Process</h2>
            <div className="space-y-6">
              {buyingSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="default" className="bg-primary">
                            {step.step}
                          </Badge>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="ml-20">
                      <h4 className="font-semibold mb-3 text-gray-700">Key Points:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Location Guides */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Location-Specific Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locationGuides.map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{location.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {location.priceRange}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{location.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-700">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {location.highlights.map((highlight, highlightIndex) => (
                          <Badge key={highlightIndex} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-700">Best For:</h4>
                      <p className="text-sm text-gray-600">{location.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Essential Checklist */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Essential Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {essentialChecklist.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-gray-50 p-8 rounded-lg mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Why Choose Nainaland Deals?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                With our comprehensive advice, you're never without support. Schedule your consultation today and start your land-purchasing journey with confidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-shield-alt text-primary"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-sm text-gray-600">Professional advice at every step</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-handshake text-primary"></i>
                  </div>
                  <h3 className="font-semibold mb-2">End-to-End Support</h3>
                  <p className="text-sm text-gray-600">From selection to registration</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-check-circle text-primary"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Verified Properties</h3>
                  <p className="text-sm text-gray-600">All properties are legally verified</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BuyingGuidesPage; 