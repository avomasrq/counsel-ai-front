import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Calendar, BarChart, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgressTracking = () => {
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
              <CheckCircle className="h-5 w-5 mr-2" />
              Progress Tracking
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Monitor Your
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Application Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your application progress, save plans, and monitor deadlines across multiple universities
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Application Status</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Document submission status</li>
                <li>• Application completion</li>
                <li>• Review progress</li>
                <li>• Decision tracking</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Deadline Management</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Application deadlines</li>
                <li>• Document due dates</li>
                <li>• Interview schedules</li>
                <li>• Decision dates</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Progress Analytics</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Completion statistics</li>
                <li>• Time management</li>
                <li>• Success metrics</li>
                <li>• Performance trends</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Smart Notifications</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deadline reminders</li>
                <li>• Status updates</li>
                <li>• Task notifications</li>
                <li>• Custom alerts</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View Your Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking; 