import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProfileBuilder from '@/components/ProfileBuilder';
import ChatCounselor from '@/components/ChatCounselor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProfileBuilder />
      
      {/* Enhanced Chat Counselor Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-counselai-light-blue/20 to-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              🤖 AI-Powered Assistance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Chat with Your
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                AI Counselor
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Get instant answers to your college admission questions from our AI-powered counselor
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <ChatCounselor />
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced University Recommendations */}
      <section id="universities" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              🎯 Personalized Matches
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Your University
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Recommendations
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              AI-powered matches based on your profile and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              {
                name: 'Stanford University',
                location: 'California, USA',
                match: '95%',
                type: 'Reach',
                color: 'bg-red-100 text-red-800',
                ranking: '#2 Global',
                acceptance: '3.9%'
              },
              {
                name: 'University of Toronto',
                location: 'Ontario, Canada',
                match: '88%',
                type: 'Target',
                color: 'bg-yellow-100 text-yellow-800',
                ranking: '#18 Global',
                acceptance: '43%'
              },
              {
                name: 'University of Amsterdam',
                location: 'Netherlands',
                match: '92%',
                type: 'Safety',
                color: 'bg-green-100 text-green-800',
                ranking: '#58 Global',
                acceptance: '65%'
              }
            ].map((uni, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-primary/10 hover:border-primary/30 rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <Badge className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${uni.color}`}>
                      {uni.type}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient">{uni.match}</div>
                      <div className="text-xs text-muted-foreground">Match</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    {uni.name}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm mb-3 sm:mb-4">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="text-xs sm:text-sm">{uni.location}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground text-xs sm:text-sm">Ranking</div>
                      <div className="font-semibold flex items-center text-xs sm:text-sm">
                        <TrendingUp className="h-3 w-3 mr-1 text-primary" />
                        {uni.ranking}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs sm:text-sm">Acceptance</div>
                      <div className="font-semibold flex items-center text-xs sm:text-sm">
                        <Star className="h-3 w-3 mr-1 text-accent" />
                        {uni.acceptance}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg text-sm sm:text-base py-2 sm:py-3">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-4 sm:mt-6 md:mt-8 lg:mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-sm sm:text-base px-6 sm:px-8">
              View All Recommendations
            </Button>
          </div>
        </div>
      </section>
      
      {/* Enhanced Footer */}
      <footer className="py-12 sm:py-16 bg-gradient-to-r from-counselai-dark-blue to-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gradient">CounselAI</h3>
            <p className="text-blue-200 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Your AI-powered college counselor for smarter admissions decisions. 
              Join thousands of students who have successfully navigated their college journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <Button size="lg" className="bg-white text-counselai-dark-blue hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                Start Your Journey Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 bg-transparent">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-8 text-xs sm:text-sm md:text-base text-blue-200">
              <span>🎓 10,000+ Students Helped</span>
              <span>🌍 Global Universities</span>
              <span>⭐ 4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
