import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Search, Target, BarChart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIUniversityMatching = () => {
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
              <Search className="h-5 w-5 mr-2" />
              AI University Matching
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Find Your Perfect
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                University Match
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered system analyzes your profile and preferences to recommend the best universities for your academic journey
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Smart Matching</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Profile-based recommendations</li>
                <li>• Admission probability analysis</li>
                <li>• Best-fit university matching</li>
                <li>• Personalized suggestions</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Data-Driven Insights</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Historical admission trends</li>
                <li>• Program success rates</li>
                <li>• Student satisfaction data</li>
                <li>• Career outcome statistics</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">University Profiles</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Detailed program information</li>
                <li>• Campus culture insights</li>
                <li>• Financial aid opportunities</li>
                <li>• Student life overview</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Advanced Filters</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Location preferences</li>
                <li>• Program requirements</li>
                <li>• Cost considerations</li>
                <li>• Specialization options</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Your University Matches
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIUniversityMatching; 