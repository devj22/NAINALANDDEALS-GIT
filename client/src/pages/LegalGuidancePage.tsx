import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LegalGuidancePage = () => {
  const legalServices = [
    {
      title: "NAINA & CIDCO Approvals",
      description: "We offer verified properties and TPS-approved properties by CIDCO under the NAINA scheme, providing a legally safe investment with no concealed encumbrance.",
      icon: "✅",
      service: "Verification"
    },
    {
      title: "Detailed Due Diligence",
      description: "Our legal assistance involves title checks, review of encumbrance certificates, and confirmation of zoning and land use approvals. This secures your investment and safeguards you against future disputes.",
      icon: "🔍",
      service: "Investigation"
    },
    {
      title: "Full Documentation Services",
      description: "From sale deeds to stamp duty registration and mutation procedures, our legal specialists cover all of it, saving you valuable time and undue hassles.",
      icon: "📋",
      service: "Documentation"
    },
    {
      title: "Regulatory Compliance & Changes",
      description: "We are on our toes regarding regulatory changes at CIDCO and NAINA, so our clients remain ahead of the game in terms of compliance. Whether it's a policy update or a legal notice, we apprise you and keep you ready.",
      icon: "📢",
      service: "Compliance"
    }
  ];

  const legalProcesses = [
    {
      title: "Property Verification",
      description: "Comprehensive legal verification process to ensure property authenticity and compliance.",
      steps: ["Title Search", "Encumbrance Check", "Approval Verification", "Legal Opinion"],
      duration: "7-10 days"
    },
    {
      title: "Documentation Process",
      description: "Complete documentation services from initial agreement to final registration.",
      steps: ["Agreement Drafting", "Document Review", "Registration", "Mutation"],
      duration: "15-20 days"
    },
    {
      title: "Compliance Monitoring",
      description: "Ongoing monitoring of regulatory changes and policy updates.",
      steps: ["Policy Tracking", "Update Notification", "Compliance Guidance", "Action Planning"],
      duration: "Ongoing"
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Legal Team",
      description: "Our specialized legal team has extensive experience in Maharashtra real estate laws and CIDCO regulations.",
      icon: "👨‍💼",
      benefit: "Expertise"
    },
    {
      title: "Hassle-Free Process",
      description: "We handle all legal complexities, saving you time and ensuring a smooth buying experience.",
      icon: "⚡",
      benefit: "Convenience"
    },
    {
      title: "Complete Compliance",
      description: "Full adherence to all state and local laws, keeping you ahead of regulatory changes.",
      icon: "🛡️",
      benefit: "Security"
    },
    {
      title: "Future Protection",
      description: "Our due diligence protects your investment against future disputes and legal complications.",
      icon: "🔒",
      benefit: "Protection"
    }
  ];

  const legalChecklist = [
    {
      category: "Property Verification",
      items: [
        "CIDCO NAINA TPS Approval",
        "Title Deed Verification",
        "Encumbrance Certificate",
        "Zone Classification Check",
        "Land Use Approvals"
      ]
    },
    {
      category: "Documentation",
      items: [
        "Sale Deed Preparation",
        "Stamp Duty Registration",
        "Mutation Procedures",
        "Property Tax Verification",
        "All Legal Formalities"
      ]
    },
    {
      category: "Compliance",
      items: [
        "Regulatory Updates",
        "Policy Change Monitoring",
        "Compliance Guidance",
        "Legal Notice Handling",
        "Future-Ready Approach"
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Legal Guidance</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Procuring realty legalities in Maharashtra may be complicated, but having NainaLandDeals as your guide, the experience is smooth. We are experts in making each property deal legally valid and completely compliant with state and local laws.
            </p>
          </div>

          {/* Legal Services */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Legal Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{service.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <Badge variant="secondary">
                            {service.service}
                          </Badge>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Processes */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Legal Processes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalProcesses.map((process, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {process.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{process.description}</p>
                    <div className="space-y-2">
                      {process.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Our Legal Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto">
                      {benefit.benefit}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Checklist */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Legal Compliance Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalChecklist.map((category, index) => (
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
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default LegalGuidancePage; 