
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown, Star, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-counselai-light-blue via-background to-accent/10 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground mb-4 sm:mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-white"></div>
                </div>
                <span className="font-medium text-xs sm:text-sm">10,000+ students helped</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-xs sm:text-sm">4.9/5 rating</span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Your AI-Powered
                <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  College Counselor
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Navigate university admissions with confidence. Get personalized recommendations, 
                application checklists, and expert guidance powered by artificial intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                Start Your Journey
                <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 max-w-md sm:max-w-none mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl mb-2 sm:mb-3 mx-auto">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient">AI-Powered</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Matching</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl mb-2 sm:mb-3 mx-auto">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient">Personalized</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Guidance</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl mb-2 sm:mb-3 mx-auto">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient">Global</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Universities</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative animate-slide-up mt-8 lg:mt-0">
            <div className="relative z-10">
              <Card className="p-4 sm:p-6 lg:p-8 bg-card/90 backdrop-blur-md border border-primary/20 shadow-2xl rounded-2xl mx-4 sm:mx-0">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">Your Profile Score</h3>
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient">92</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">/100</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-5">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between text-xs sm:text-sm font-medium">
                        <span>Academic Performance</span>
                        <span className="text-primary">95%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 sm:h-3">
                        <div className="gradient-primary h-2 sm:h-3 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between text-xs sm:text-sm font-medium">
                        <span>Test Scores</span>
                        <span className="text-primary">88%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 sm:h-3">
                        <div className="gradient-primary h-2 sm:h-3 rounded-full transition-all duration-1000 delay-200" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between text-xs sm:text-sm font-medium">
                        <span>Extracurriculars</span>
                        <span className="text-primary">93%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 sm:h-3">
                        <div className="gradient-primary h-2 sm:h-3 rounded-full transition-all duration-1000 delay-500" style={{ width: '93%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary text-white hover:shadow-lg transition-all duration-300 py-4 sm:py-6 text-sm sm:text-lg font-semibold">
                    View Recommendations
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Enhanced Floating Elements - Hidden on mobile for performance */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-float blur-sm"></div>
            <div className="hidden sm:block absolute -bottom-10 -left-10 w-24 h-24 lg:w-36 lg:h-36 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
            <div className="hidden lg:block absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="flex flex-col items-center mt-12 sm:mt-16 lg:mt-20 animate-bounce">
          <div className="text-xs sm:text-sm text-muted-foreground mb-2">Scroll to explore</div>
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
