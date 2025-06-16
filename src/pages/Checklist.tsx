import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Clock, Calendar, FileText, CheckCircle } from 'lucide-react';

const Checklist = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Clock className="h-5 w-5 mr-2" />
              Application Checklist
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your College Application
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Roadmap
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your progress and stay organized throughout your college application journey
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Overall Progress</h2>
              <span className="text-primary font-semibold">65% Complete</span>
            </div>
            <Progress value={65} className="h-2" />
          </Card>

          {/* Checklist Sections */}
          <div className="space-y-8">
            {/* Academic Requirements */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Academic Requirements</h3>
                  <p className="text-muted-foreground">Essential documents and scores</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox id="transcript" />
                  <label htmlFor="transcript" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Official High School Transcript
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="sat" />
                  <label htmlFor="sat" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    SAT/ACT Scores
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="ap" />
                  <label htmlFor="ap" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    AP/IB Scores (if applicable)
                  </label>
                </div>
              </div>
            </Card>

            {/* Application Materials */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Application Materials</h3>
                  <p className="text-muted-foreground">Required documents and essays</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox id="common-app" />
                  <label htmlFor="common-app" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Common Application Form
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="personal-statement" />
                  <label htmlFor="personal-statement" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Personal Statement
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="supplemental" />
                  <label htmlFor="supplemental" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Supplemental Essays
                  </label>
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Recommendations</h3>
                  <p className="text-muted-foreground">Letters and references</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox id="counselor" />
                  <label htmlFor="counselor" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Counselor Recommendation
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="teacher" />
                  <label htmlFor="teacher" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Teacher Recommendations (2)
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="additional" />
                  <label htmlFor="additional" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Additional Recommendations (if required)
                  </label>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-12">
            <Button variant="outline" className="px-8">
              Save Progress
            </Button>
            <Button className="gradient-primary text-white px-8">
              Export Checklist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist; 