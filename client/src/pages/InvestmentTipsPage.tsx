import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const InvestmentTipsPage = () => {
  const investmentTips = [
    {
      title: "Invest in NAINA Plots for Optimal ROI",
      description: "Land in CIDCO NAINA TPS-approved zones has turned into an investment magnet as it satisfies government planning and provides safety in terms of legality and future growth. As state-funded infrastructure is picking up pace, NAINA plots are gaining humongous popularity among investors.",
      icon: "📈",
      category: "ROI Focus"
    },
    {
      title: "Target High-Growth Regions",
      description: "Panvel, Khalapur, and surrounding areas are planned to develop as economic and residential centers. On-going infrastructure developments, particularly the soon-to-be-completed Navi Mumbai International Airport, are driving property prices higher. High-end plots in Khalapur are the most in-demand property because they have access to expressways and scenic landscapes.",
      icon: "🎯",
      category: "Location Strategy"
    },
    {
      title: "Second Home Investments in Karjat",
      description: "With growing urban stress, many Mumbaikars have started looking at the concept of weekend homes. Karjat, with its green cover and good connectivity, is finding place as the perfect destination for a second home investment. It's a good option for both personal leisure and rental income generation.",
      icon: "🏡",
      category: "Lifestyle Investment"
    },
    {
      title: "Strategic Portfolio Diversification",
      description: "There is a need to balance long-hold and mid-term investment plans. For example, NAINA city plots are ideal for long-term capital appreciation, whereas resale prospects in emerging sectors provide faster returns. Our experts assist you in developing a land investment portfolio based on your needs.",
      icon: "⚖️",
      category: "Portfolio Strategy"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Investment Tips</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Investing in land is the most dependable and lucrative method for creating long-term wealth. At NainaLandDeals, our purpose is to advise and empower our clients with investment advice derived from extensive research and first-hand experience of areas such as Panvel, Karjat, and Khalapur. Being a new investor or an experienced land purchaser, our advice can assist you in making better choices.
            </p>
          </div>

          {/* Investment Tips */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Expert Investment Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {investmentTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{tip.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                          <Badge variant="secondary">
                            {tip.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </CardHeader>
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

export default InvestmentTipsPage; 