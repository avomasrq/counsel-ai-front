import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, Calendar, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationChecklist = () => {
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
              <Clock className="h-5 w-5 mr-2" />
              Application Checklist
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay Organized with
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Custom Checklists
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized to-do lists with deadlines, required documents, and application tips for each university
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Deadline Tracking</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Application deadlines</li>
                <li>• Document submission dates</li>
                <li>• Test score deadlines</li>
                <li>• Financial aid deadlines</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Required Documents</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Transcripts and test scores</li>
                <li>• Letters of recommendation</li>
                <li>• Personal statements</li>
                <li>• Supplemental materials</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Application Tips</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• University-specific requirements</li>
                <li>• Common application tips</li>
                <li>• Interview preparation</li>
                <li>• Portfolio guidelines</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Progress Monitoring</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Task completion tracking</li>
                <li>• Document status updates</li>
                <li>• Application progress</li>
                <li>• Reminder notifications</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View Your Checklists
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationChecklist; 