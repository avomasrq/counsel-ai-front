import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { MapPin, Search, Filter, Star } from 'lucide-react';
import { getAllUniversities, searchUniversities, filterUniversities, type University } from '@/utils/universityData';
import UniversityDetails from '@/components/UniversityDetails';

const Universities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [filters, setFilters] = useState({
    location: 'all',
    major: 'all',
    acceptanceRate: [0, 100],
    satScore: [400, 1600],
    tuition: [0, 100000],
  });

  // Get all universities and apply search/filters
  const universities = getAllUniversities();
  const searchedUniversities = searchUniversities(searchQuery);
  const filteredUniversities = filterUniversities({
    location: filters.location,
    major: filters.major,
    minAcceptanceRate: filters.acceptanceRate[0],
    maxAcceptanceRate: filters.acceptanceRate[1],
    minSatScore: filters.satScore[0],
    maxSatScore: filters.satScore[1],
    minTuition: filters.tuition[0],
    maxTuition: filters.tuition[1]
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect University</h1>

      {/* Search and Filter Section */}
      <div className="grid gap-6 mb-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search universities by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Select
                value={filters.location}
                onValueChange={(value) => handleFilterChange('location', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="northeast">Northeast</SelectItem>
                  <SelectItem value="southeast">Southeast</SelectItem>
                  <SelectItem value="midwest">Midwest</SelectItem>
                  <SelectItem value="southwest">Southwest</SelectItem>
                  <SelectItem value="west">West</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Major</label>
              <Select
                value={filters.major}
                onValueChange={(value) => handleFilterChange('major', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select major" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Majors</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="sciences">Natural Sciences</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Acceptance Rate: {filters.acceptanceRate[0]}% - {filters.acceptanceRate[1]}%
              </label>
              <Slider
                value={filters.acceptanceRate}
                onValueChange={(value) => handleFilterChange('acceptanceRate', value)}
                min={0}
                max={100}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                SAT Score: {filters.satScore[0]} - {filters.satScore[1]}
              </label>
              <Slider
                value={filters.satScore}
                onValueChange={(value) => handleFilterChange('satScore', value)}
                min={400}
                max={1600}
                step={10}
                className="mt-2"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Results Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUniversities.map((university) => (
          <Card key={university.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video">
              <img
                src={university.images.campus}
                alt={`${university.name} Campus`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span>{`${university.location.city}, ${university.location.state}`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">{university.rankings.usNews} US News Rank</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">Acceptance Rate</div>
                  <div className="font-semibold">{university.stats.acceptanceRate}%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Tuition (Year)</div>
                  <div className="font-semibold">
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
                </div>
              </div>
              <Button
                className="w-full gradient-primary text-white"
                onClick={() => setSelectedUniversity(university)}
              >
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* University Details Modal */}
      {selectedUniversity && (
        <UniversityDetails
          university={selectedUniversity}
          isOpen={!!selectedUniversity}
          onClose={() => setSelectedUniversity(null)}
        />
      )}
    </div>
  );
};

export default Universities; 