import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Book, FileText, Video, Users, Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Book className="h-5 w-5 mr-2" />
              Resources
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your College Application
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Resource Hub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access guides, templates, and tools to help you succeed in your college application journey
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Guides */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Application Guides</h3>
                  <p className="text-muted-foreground">Step-by-step instructions</p>
                </div>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-between">
                  <span>Common App Guide</span>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Essay Writing Tips</span>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Financial Aid Guide</span>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Templates */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Templates</h3>
                  <p className="text-muted-foreground">Ready-to-use formats</p>
                </div>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-between">
                  <span>Resume Template</span>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Activity List Template</span>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Essay Outline Template</span>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Video Tutorials */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Video Tutorials</h3>
                  <p className="text-muted-foreground">Visual learning resources</p>
                </div>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-between">
                  <span>Profile Building Tutorial</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Essay Writing Workshop</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Interview Preparation</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Community Resources */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Community Resources</h3>
                  <p className="text-muted-foreground">Connect with others</p>
                </div>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-between">
                  <span>Student Forums</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Mentorship Program</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Success Stories</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Additional Resources */}
          <Card className="p-6 mt-8">
            <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Button variant="outline" className="w-full justify-between">
                <span>Scholarship Database</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Test Prep Resources</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>College Visit Guide</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Financial Aid Calculator</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources; 