import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, GraduationCap, Settings, Award, BookOpen, MapPin, Mail, Phone, Globe } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <User className="h-12 w-12 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-muted-foreground mb-4">High School Senior • Class of 2024</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  john.doe@email.com
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  San Francisco, CA
                </Button>
              </div>
            </div>
            <Button className="gradient-primary text-white">
              Edit Profile
            </Button>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="academic" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="academic" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Academic Profile
              </TabsTrigger>
              <TabsTrigger value="personal" className="gap-2">
                <User className="h-4 w-4" />
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="preferences" className="gap-2">
                <Settings className="h-4 w-4" />
                Preferences
              </TabsTrigger>
            </TabsList>

            {/* Academic Profile Tab */}
            <TabsContent value="academic" className="space-y-6">
              {/* Academic Stats */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Academic Statistics</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <Label>GPA (Unweighted)</Label>
                      <Input type="number" step="0.01" placeholder="3.8" />
                    </div>
                    <div>
                      <Label>GPA (Weighted)</Label>
                      <Input type="number" step="0.01" placeholder="4.2" />
                    </div>
                    <div>
                      <Label>Class Rank</Label>
                      <Input type="text" placeholder="Top 5%" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>SAT Score</Label>
                      <Input type="number" placeholder="1500" />
                    </div>
                    <div>
                      <Label>ACT Score</Label>
                      <Input type="number" placeholder="34" />
                    </div>
                    <div>
                      <Label>AP/IB Courses</Label>
                      <Input type="number" placeholder="8" />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Coursework */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Coursework</h2>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label>Current Courses</Label>
                      <Textarea
                        placeholder="AP Calculus BC, AP Physics C, AP Computer Science, AP Literature..."
                        className="h-24"
                      />
                    </div>
                    <div>
                      <Label>Previous Courses</Label>
                      <Textarea
                        placeholder="AP Calculus AB, AP Chemistry, AP World History..."
                        className="h-24"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Achievements */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Achievements & Awards</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Academic Awards</Label>
                    <Textarea
                      placeholder="National Merit Scholar, AP Scholar with Distinction..."
                      className="h-24"
                    />
                  </div>
                  <div>
                    <Label>Extracurricular Activities</Label>
                    <Textarea
                      placeholder="Science Olympiad Captain, Math Team, Robotics Club..."
                      className="h-24"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Personal Info Tab */}
            <TabsContent value="personal" className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <Label>Full Name</Label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div>
                      <Label>Date of Birth</Label>
                      <Input type="date" />
                    </div>
                    <div>
                      <Label>Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>Email</Label>
                      <Input type="email" placeholder="john.doe@email.com" />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <Label>Location</Label>
                      <Input placeholder="San Francisco, CA" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">High School Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label>School Name</Label>
                    <Input placeholder="San Francisco High School" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label>Graduation Year</Label>
                      <Input type="number" placeholder="2024" />
                    </div>
                    <div>
                      <Label>School Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="charter">Charter</SelectItem>
                          <SelectItem value="magnet">Magnet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Application Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <Label>Preferred Majors</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select major" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="eng">Engineering</SelectItem>
                        <SelectItem value="bus">Business</SelectItem>
                        <SelectItem value="med">Medicine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Location</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>University Size Preference</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (less than 5,000 students)</SelectItem>
                        <SelectItem value="medium">Medium (5,000-15,000 students)</SelectItem>
                        <SelectItem value="large">Large (more than 15,000 students)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Additional Preferences</Label>
                    <Textarea
                      placeholder="Any specific preferences about campus culture, research opportunities, etc."
                      className="h-24"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates about application deadlines and matches</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Application Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminders about upcoming deadlines</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Save Changes Button */}
          <div className="flex justify-end mt-8">
            <Button className="gradient-primary text-white px-8">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 