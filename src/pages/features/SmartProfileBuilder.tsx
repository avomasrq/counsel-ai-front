import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, User, Book, Award, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartProfileBuilder = () => {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <User className="h-5 w-5 mr-2" />
              Smart Profile Builder
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Create Your Comprehensive
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Academic Profile
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build a detailed academic profile that showcases your strengths and helps you stand out to universities
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Academic Information</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• GPA and transcript details</li>
                <li>• Standardized test scores</li>
                <li>• Course history and rigor</li>
                <li>• Academic achievements</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Extracurricular Activities</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clubs and organizations</li>
                <li>• Sports and athletics</li>
                <li>• Community service</li>
                <li>• Leadership roles</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Achievements & Awards</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Academic competitions</li>
                <li>• Scholarships and honors</li>
                <li>• Special recognitions</li>
                <li>• Certifications</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Personal Interests</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Career aspirations</li>
                <li>• Hobbies and passions</li>
                <li>• Cultural background</li>
                <li>• Personal statement</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Building Your Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartProfileBuilder; 