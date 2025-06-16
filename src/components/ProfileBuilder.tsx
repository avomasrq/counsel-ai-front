
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { User, GraduationCap, Target, MapPin } from 'lucide-react';
import CountrySelector from './CountrySelector';

const ProfileBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Personal Info
    name: '',
    email: '',
    age: '',
    nationality: '',
    
    // Academic Info
    gpa: '',
    satScore: '',
    actScore: '',
    ieltsScore: '',
    toeflScore: '',
    
    // Preferences
    intendedMajor: '',
    preferredCountries: [] as string[],
    budgetRange: '',
    
    // Background
    extracurriculars: '',
    workExperience: '',
    awards: ''
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleCountriesChange = (countries: string[]) => {
    setProfileData(prev => ({ ...prev, preferredCountries: countries }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={profileData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  placeholder="Enter your age"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input
                  id="nationality"
                  value={profileData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  placeholder="Enter your nationality"
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Academic Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA (out of 4.0)</Label>
                <Input
                  id="gpa"
                  type="number"
                  step="0.01"
                  max="4.0"
                  value={profileData.gpa}
                  onChange={(e) => handleInputChange('gpa', e.target.value)}
                  placeholder="3.75"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="satScore">SAT Score</Label>
                <Input
                  id="satScore"
                  type="number"
                  max="1600"
                  value={profileData.satScore}
                  onChange={(e) => handleInputChange('satScore', e.target.value)}
                  placeholder="1400"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="ieltsScore">IELTS Score</Label>
                <Input
                  id="ieltsScore"
                  type="number"
                  step="0.5"
                  max="9"
                  value={profileData.ieltsScore}
                  onChange={(e) => handleInputChange('ieltsScore', e.target.value)}
                  placeholder="7.5"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="toeflScore">TOEFL Score</Label>
                <Input
                  id="toeflScore"
                  type="number"
                  max="120"
                  value={profileData.toeflScore}
                  onChange={(e) => handleInputChange('toeflScore', e.target.value)}
                  placeholder="100"
                />
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Preferences & Goals</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="intendedMajor">Intended Major</Label>
                <Select value={profileData.intendedMajor} onValueChange={(value) => handleInputChange('intendedMajor', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your intended major" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="business">Business Administration</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="economics">Economics</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <CountrySelector
                selectedCountries={profileData.preferredCountries}
                onCountriesChange={handleCountriesChange}
                maxSelections={5}
              />
              
              <div className="space-y-2">
                <Label htmlFor="budgetRange">Annual Budget Range (USD)</Label>
                <Select value={profileData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-20k">Under $20,000</SelectItem>
                    <SelectItem value="20k-40k">$20,000 - $40,000</SelectItem>
                    <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                    <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
                    <SelectItem value="over-80k">Over $80,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Background & Experience</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="extracurriculars">Extracurricular Activities</Label>
                <Input
                  id="extracurriculars"
                  value={profileData.extracurriculars}
                  onChange={(e) => handleInputChange('extracurriculars', e.target.value)}
                  placeholder="Student government, sports, volunteering..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="workExperience">Work Experience</Label>
                <Input
                  id="workExperience"
                  value={profileData.workExperience}
                  onChange={(e) => handleInputChange('workExperience', e.target.value)}
                  placeholder="Internships, part-time jobs, freelance work..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="awards">Awards & Achievements</Label>
                <Input
                  id="awards"
                  value={profileData.awards}
                  onChange={(e) => handleInputChange('awards', e.target.value)}
                  placeholder="Academic awards, competition wins, certifications..."
                />
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="profile" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Your
            <span className="text-gradient"> Student Profile</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Help us understand your background to provide personalized recommendations
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle>Step {currentStep} of {totalSteps}</CardTitle>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="w-full" />
            </CardHeader>
            
            <CardContent className="space-y-6">
              {renderStep()}
              
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={currentStep === totalSteps}
                  className="gradient-primary text-white"
                >
                  {currentStep === totalSteps ? 'Complete Profile' : 'Next Step'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileBuilder;
