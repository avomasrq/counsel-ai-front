import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Book, FileText, PenTool, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const DocumentGuidance = () => {
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
              <Book className="h-5 w-5 mr-2" />
              Document Guidance
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Craft Your Perfect
              <span className="text-gradient block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Application Documents
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get AI-assisted guidance for writing personal statements, building resumes, and reviewing essays
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Personal Statement</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Writing prompts and tips</li>
                <li>• Structure guidance</li>
                <li>• Content suggestions</li>
                <li>• Editing assistance</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Resume Building</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Format templates</li>
                <li>• Achievement highlighting</li>
                <li>• Skills presentation</li>
                <li>• Professional formatting</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Essay Review</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Grammar checking</li>
                <li>• Style suggestions</li>
                <li>• Content feedback</li>
                <li>• Plagiarism detection</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Templates & Examples</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sample essays</li>
                <li>• Resume templates</li>
                <li>• Statement examples</li>
                <li>• Format guides</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Writing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentGuidance; 