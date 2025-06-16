import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Search, Clock, Book, CheckCircle, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  const features = [
    {
      icon: User,
      title: 'Smart Profile Builder',
      description: 'Create a comprehensive academic profile with GPA, test scores, extracurriculars, and personal interests.',
      color: 'text-primary',
      bgColor: 'from-primary/10 to-accent/10',
      link: '/features/smart-profile-builder'
    },
    {
      icon: Search,
      title: 'AI University Matching',
      description: 'Get personalized university recommendations based on your profile, preferences, and admission probability.',
      color: 'text-accent',
      bgColor: 'from-accent/10 to-primary/10',
      link: '/features/ai-university-matching'
    },
    {
      icon: Clock,
      title: 'Application Checklist',
      description: 'Receive customized to-do lists with deadlines, required documents, and application tips for each university.',
      color: 'text-primary',
      bgColor: 'from-primary/10 to-accent/10',
      link: '/features/application-checklist'
    },
    {
      icon: BarChart,
      title: 'Score Analysis',
      description: 'Detailed analysis of your academic performance with actionable feedback to strengthen your application.',
      color: 'text-accent',
      bgColor: 'from-accent/10 to-primary/10',
      link: '/features/score-analysis'
    },
    {
      icon: Book,
      title: 'Document Guidance',
      description: 'AI-assisted personal statement writing, resume building, and essay review with templates and examples.',
      color: 'text-primary',
      bgColor: 'from-primary/10 to-accent/10',
      link: '/features/document-guidance'
    },
    {
      icon: CheckCircle,
      title: 'Progress Tracking',
      description: 'Monitor your application progress, save plans, and track deadlines across multiple universities.',
      color: 'text-accent',
      bgColor: 'from-accent/10 to-primary/10',
      link: '/features/progress-tracking'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-counselai-light-blue/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            ✨ Comprehensive Platform
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Everything You Need for
            <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              College Admissions
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Our comprehensive platform guides you through every step of the college application process
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-primary/10 hover:border-primary/30 animate-fade-in rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    {feature.description}
                  </p>
                  <Link to={feature.link}>
                    <Button variant="ghost" className="p-0 h-auto text-sm sm:text-base text-primary hover:text-accent transition-colors group/btn">
                      Learn more 
                      <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl max-w-md sm:max-w-lg mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to get started?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
              Join thousands of students who have successfully navigated their college admissions with CounselAI
            </p>
            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
              Start Building Your Profile
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
