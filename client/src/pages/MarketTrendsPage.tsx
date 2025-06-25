import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MarketTrendsPage = () => {
  const marketTrends = [
    {
      title: "Panvel Airport Development Impact",
      description: "The proposed opening of the Panvel Airport has created a buzz in the real estate sector. Rates of properties in regions such as Khalapur and NAINA zones have been highly on the increase, and there cannot be a better time to invest than now.",
      icon: "✈️",
      impact: "High",
      timeframe: "Ongoing"
    },
    {
      title: "Steady Price Appreciation",
      description: "As per recent statistics, NAINA city plot rates have dropped notching double-digit gains over the past 2 years. The appreciation is led by infrastructure commitments and high investor faith in CIDCO-sponsored projects.",
      icon: "📈",
      impact: "Strong",
      timeframe: "2 Years"
    },
    {
      title: "Second Homes Become Popular",
      description: "There is significant change in consumer behavior with growing demand for second homes at Karjat. Not only do these homes work as serene getaways but also generate potential rental yields through short-term stay platforms.",
      icon: "🏡",
      impact: "Growing",
      timeframe: "Recent"
    },
    {
      title: "Demand for High-End Land Pockets",
      description: "There is growing demand for high-end plots at Khalapur and high-potential areas in Panvel, both from end-users and developers looking for strategic land holdings.",
      icon: "💎",
      impact: "Premium",
      timeframe: "Current"
    }
  ];

  const keyInsights = [
    {
      title: "Infrastructure-Driven Growth",
      content: "Major infrastructure projects like the Panvel Airport are driving unprecedented growth in surrounding areas, creating new investment opportunities.",
      category: "Infrastructure",
      trend: "Positive"
    },
    {
      title: "NAINA TPS Success",
      content: "CIDCO-sponsored NAINA TPS projects are gaining strong investor confidence due to transparent development and clear legal framework.",
      category: "Development",
      trend: "Bullish"
    },
    {
      title: "Lifestyle Shift",
      content: "Changing consumer preferences towards second homes and weekend getaways are creating new market segments in scenic locations like Karjat.",
      category: "Consumer Behavior",
      trend: "Emerging"
    },
    {
      title: "Premium Segment Growth",
      content: "High-end land pockets in Khalapur and strategic areas in Panvel are attracting both end-users and institutional investors.",
      category: "Premium Market",
      trend: "Strong"
    }
  ];

  const marketData = [
    {
      region: "Panvel NAINA",
      appreciation: "+45%",
      timeframe: "2 Years",
      drivers: ["Airport Development", "Metro Connectivity", "Commercial Hub"]
    },
    {
      region: "Khalapur",
      appreciation: "+35%",
      timeframe: "2 Years",
      drivers: ["Expressway Access", "Premium Developments", "Scenic Location"]
    },
    {
      region: "Karjat",
      appreciation: "+40%",
      timeframe: "2 Years",
      drivers: ["Weekend Tourism", "Natural Beauty", "Connectivity"]
    }
  ];

  const futureProjections = [
    {
      title: "Panvel Airport Hub",
      projection: "Expected 60-80% growth over next 3-5 years",
      factors: ["Airport Operations", "Metro Development", "Commercial Growth"],
      timeline: "3-5 Years"
    },
    {
      title: "Khalapur Premium Market",
      projection: "Anticipated 40-50% appreciation in premium segments",
      factors: ["Luxury Developments", "Infrastructure Growth", "Investor Interest"],
      timeline: "2-3 Years"
    },
    {
      title: "Karjat Second Homes",
      projection: "Projected 50-60% growth in weekend home market",
      factors: ["Tourism Growth", "Connectivity Improvements", "Lifestyle Demand"],
      timeline: "3-4 Years"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Market Trends</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Following market trends is the key in land investment. At NainaLandDeals, we provide in-depth analysis of property price appreciation, demand-supply trends, and future infrastructure projects influencing land value in Navi Mumbai and its precincts.
            </p>
          </div>

          {/* Current Market Trends */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Current Market Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketTrends.map((trend, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{trend.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{trend.title}</CardTitle>
                          <Badge 
                            variant={trend.impact === "High" ? "default" : 
                                    trend.impact === "Strong" ? "secondary" : 
                                    trend.impact === "Premium" ? "outline" : "default"}
                            className={trend.impact === "High" ? "bg-green-500" : 
                                     trend.impact === "Strong" ? "bg-blue-500" : ""}
                          >
                            {trend.impact}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {trend.timeframe}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{trend.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Market Insights */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Key Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyInsights.map((insight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                      <Badge 
                        variant={insight.trend === "Positive" ? "default" : 
                                insight.trend === "Bullish" ? "secondary" : 
                                insight.trend === "Strong" ? "default" : "outline"}
                        className={insight.trend === "Positive" ? "bg-green-500" : 
                                 insight.trend === "Bullish" ? "bg-blue-500" : 
                                 insight.trend === "Strong" ? "bg-green-500" : ""}
                      >
                        {insight.trend}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {insight.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{insight.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Market Performance Data */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Market Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketData.map((data, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{data.region}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">{data.appreciation}</span>
                      <Badge variant="outline">{data.timeframe}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-gray-700">Key Drivers:</h4>
                    <div className="space-y-2">
                      {data.drivers.map((driver, driverIndex) => (
                        <div key={driverIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm text-gray-600">{driver}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Future Projections */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Future Projections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {futureProjections.map((projection, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{projection.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {projection.timeline}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4 font-semibold">{projection.projection}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 mb-2">Growth Factors:</p>
                      {projection.factors.map((factor, factorIndex) => (
                        <div key={factorIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm text-gray-600">{factor}</span>
                        </div>
                      ))}
                    </div>
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

export default MarketTrendsPage; 