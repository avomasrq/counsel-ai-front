import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BarChart, TrendingUp, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScoreAnalysis = () => {
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
              <BarChart className="h-5 w-5 mr-2" />
              Score Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Understand Your
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Academic Performance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get detailed analysis of your academic performance with actionable feedback to strengthen your application
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Performance Metrics</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• GPA analysis and trends</li>
                <li>• Test score breakdowns</li>
                <li>• Subject-wise performance</li>
                <li>• Historical comparisons</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Improvement Tracking</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Progress over time</li>
                <li>• Achievement milestones</li>
                <li>• Performance predictions</li>
                <li>• Growth analytics</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">University Benchmarks</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Target score ranges</li>
                <li>• Admission requirements</li>
                <li>• Competitive analysis</li>
                <li>• Success probability</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Actionable Insights</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Personalized recommendations</li>
                <li>• Study strategies</li>
                <li>• Test preparation tips</li>
                <li>• Improvement opportunities</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View Your Analysis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreAnalysis; 