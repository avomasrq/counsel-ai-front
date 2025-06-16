import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Globe, Phone, Mail, Star, Users, GraduationCap, DollarSign, Calendar } from 'lucide-react';
import type { University } from '@/utils/universityData';
import { calculateMatchScore } from '@/utils/universityData';

interface UniversityDetailsProps {
  university: University;
  isOpen: boolean;
  onClose: () => void;
  userProfile?: {
    satScore?: number;
    actScore?: number;
    gpa?: number;
    preferredMajors?: string[];
    preferredLocation?: string;
  };
}

const UniversityDetails = ({ university, isOpen, onClose, userProfile }: UniversityDetailsProps) => {
  const matchScore = userProfile ? calculateMatchScore(university, userProfile) : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <img
              src={university.images.logo}
              alt={`${university.name} Logo`}
              className="h-12 w-auto object-contain"
            />
            <DialogTitle className="text-2xl font-bold">{university.name}</DialogTitle>
          </div>
        </DialogHeader>

        {/* Header Section */}
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <img
            src={university.images.campus}
            alt={`${university.name} Campus`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{`${university.location.city}, ${university.location.state}`}</span>
              </div>
              {matchScore !== null && (
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">{`${matchScore}% Match`}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-background/50 backdrop-blur-sm">
            <div className="text-sm text-muted-foreground">Acceptance Rate</div>
            <div className="text-xl font-bold">{university.stats.acceptanceRate}%</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-sm">
            <div className="text-sm text-muted-foreground">Student Body</div>
            <div className="text-xl font-bold">{university.stats.enrollment.total.toLocaleString()}</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-sm">
            <div className="text-sm text-muted-foreground">Student-Faculty Ratio</div>
            <div className="text-xl font-bold">{university.stats.studentFacultyRatio}:1</div>
          </Card>
          <Card className="p-4 bg-background/50 backdrop-blur-sm">
            <div className="text-sm text-muted-foreground">Tuition (Year)</div>
            <div className="text-xl font-bold">
              {(() => {
                const tuition = university.costs.tuition as {
                  inState?: number;
                  uk?: number;
                  japanese?: number;
                  singaporean?: number;
                  international?: number;
                };
                if (typeof tuition.inState === 'number') {
                  return `$${tuition.inState.toLocaleString()}`;
                } else if (typeof tuition.uk === 'number') {
                  return `£${tuition.uk.toLocaleString()}`;
                } else if (typeof tuition.japanese === 'number') {
                  return `¥${tuition.japanese.toLocaleString()}`;
                } else if (typeof tuition.singaporean === 'number') {
                  return `S$${tuition.singaporean.toLocaleString()}`;
                } else if (typeof tuition.international === 'number') {
                  return `$${tuition.international.toLocaleString()}`;
                }
                return 'Contact for details';
              })()}
            </div>
          </Card>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
            <TabsTrigger value="campus">Campus Life</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">About {university.name}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{`${university.location.city}, ${university.location.state}, ${university.location.country}`}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Website</div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <a href={university.contact.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {university.contact.website}
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Contact</div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{university.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="h-4 w-4" />
                      <span>{university.contact.email}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Student Body</div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{`${university.stats.enrollment.undergraduate.toLocaleString()} Undergraduate`}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{`${university.stats.enrollment.graduate.toLocaleString()} Graduate`}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Costs</div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span>
                        {(() => {
                          const total = university.costs.total as {
                            inState?: number;
                            uk?: number;
                            japanese?: number;
                            singaporean?: number;
                            international?: number;
                          };
                          if (typeof total.inState === 'number') {
                            return `$${total.inState.toLocaleString()} Total Cost`;
                          } else if (typeof total.uk === 'number') {
                            return `£${total.uk.toLocaleString()} Total Cost`;
                          } else if (typeof total.japanese === 'number') {
                            return `¥${total.japanese.toLocaleString()} Total Cost`;
                          } else if (typeof total.singaporean === 'number') {
                            return `S$${total.singaporean.toLocaleString()} Total Cost`;
                          } else if (typeof total.international === 'number') {
                            return `$${total.international.toLocaleString()} Total Cost`;
                          }
                          return 'Contact for details';
                        })()}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Application Deadlines</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{`Regular Decision: ${university.admissions.applicationDeadlines.regularDecision}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Academics Tab */}
          <TabsContent value="academics" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Academic Programs</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium mb-2">Popular Majors</div>
                  <div className="flex flex-wrap gap-2">
                    {university.academics.popularMajors.map((major, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {major}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Schools & Departments</div>
                  <ul className="list-disc list-inside space-y-1">
                    {university.academics.departments.map((dept, index) => (
                      <li key={index} className="text-muted-foreground">{dept}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Admissions Tab */}
          <TabsContent value="admissions" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Admissions Information</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2">Test Scores (Middle 50%)</div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm text-muted-foreground">SAT</div>
                        <div>{`${university.admissions.sat.middle50.total[0]} - ${university.admissions.sat.middle50.total[1]}`}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">ACT</div>
                        <div>{`${university.admissions.act.middle50[0]} - ${university.admissions.act.middle50[1]}`}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">GPA</div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm text-muted-foreground">Average</div>
                        <div>{university.admissions.gpa.average}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Weighted</div>
                        <div>{university.admissions.gpa.weighted}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2">Application Requirements</div>
                    <ul className="list-disc list-inside space-y-1">
                      {university.admissions.requirements.map((req, index) => (
                        <li key={index} className="text-muted-foreground">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Deadlines</div>
                    <div className="space-y-2">
                      {Object.entries(university.admissions.applicationDeadlines).map(([type, date]) => (
                        <div key={type} className="flex justify-between">
                          <span className="text-muted-foreground">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span>{date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Campus Life Tab */}
          <TabsContent value="campus" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Campus Life</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2">Campus Setting</div>
                    <div className="text-muted-foreground capitalize">{university.campus.setting}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Housing</div>
                    <div className="space-y-2">
                      <div className="text-muted-foreground">
                        {university.campus.housing.guaranteedHousing ? 'Guaranteed Housing' : 'Housing Available'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {university.campus.housing.dormTypes.map((type, index) => (
                          <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2">Student Activities</div>
                    <div className="space-y-2">
                      <div className="text-muted-foreground">
                        {`${university.studentLife.clubs} Student Organizations`}
                      </div>
                      <div className="text-muted-foreground">
                        {`${university.studentLife.sports.varsity} Varsity Sports`}
                      </div>
                      <div className="text-muted-foreground">
                        {`${university.studentLife.sports.club} Club Sports`}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Diversity</div>
                    <div className="space-y-2">
                      <div className="text-muted-foreground">
                        {`${university.studentLife.diversity.international}% International Students`}
                      </div>
                      <div className="text-muted-foreground">
                        {`${university.studentLife.diversity.domesticMinority}% Domestic Minority`}
                      </div>
                      <div className="text-muted-foreground">
                        {`${university.studentLife.diversity.firstGeneration}% First Generation`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="gradient-primary text-white">
            Add to Favorites
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UniversityDetails; 