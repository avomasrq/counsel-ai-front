import universitiesData from '@/data/universities.json';

export type University = typeof universitiesData.universities[0];

// Get all universities
export const getAllUniversities = (): University[] => {
  return universitiesData.universities;
};

// Get university by ID
export const getUniversityById = (id: string): University | undefined => {
  return universitiesData.universities.find(uni => uni.id === id);
};

// Search universities by name
export const searchUniversities = (query: string): University[] => {
  if (!query) return getAllUniversities();
  
  const searchTerm = query.toLowerCase();
  return universitiesData.universities.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm) ||
    uni.location.city.toLowerCase().includes(searchTerm) ||
    uni.location.state.toLowerCase().includes(searchTerm) ||
    uni.location.country.toLowerCase().includes(searchTerm)
  );
};

// Filter universities by criteria
interface FilterOptions {
  location?: string;
  major?: string;
  minAcceptanceRate?: number;
  maxAcceptanceRate?: number;
  minSatScore?: number;
  maxSatScore?: number;
  minActScore?: number;
  maxActScore?: number;
  minTuition?: number;
  maxTuition?: number;
}

// Helper function to get region from state
const getRegionFromState = (state: string): string => {
  const regions: { [key: string]: string } = {
    // Northeast
    'ME': 'northeast', 'NH': 'northeast', 'VT': 'northeast', 'MA': 'northeast',
    'RI': 'northeast', 'CT': 'northeast', 'NY': 'northeast', 'NJ': 'northeast',
    'PA': 'northeast', 'DE': 'northeast', 'MD': 'northeast',
    // Southeast
    'VA': 'southeast', 'WV': 'southeast', 'NC': 'southeast', 'SC': 'southeast',
    'GA': 'southeast', 'FL': 'southeast', 'KY': 'southeast', 'TN': 'southeast',
    'AL': 'southeast', 'MS': 'southeast', 'AR': 'southeast', 'LA': 'southeast',
    // Midwest
    'OH': 'midwest', 'IN': 'midwest', 'IL': 'midwest', 'MI': 'midwest',
    'WI': 'midwest', 'MN': 'midwest', 'IA': 'midwest', 'MO': 'midwest',
    'ND': 'midwest', 'SD': 'midwest', 'NE': 'midwest', 'KS': 'midwest',
    // Southwest
    'OK': 'southwest', 'TX': 'southwest', 'NM': 'southwest', 'AZ': 'southwest',
    // West
    'CO': 'west', 'WY': 'west', 'MT': 'west', 'ID': 'west',
    'WA': 'west', 'OR': 'west', 'CA': 'west', 'NV': 'west',
    'UT': 'west', 'AK': 'west', 'HI': 'west'
  };
  return regions[state] || 'other';
};

export const filterUniversities = ({
  location,
  major,
  minAcceptanceRate,
  maxAcceptanceRate,
  minSatScore,
  maxSatScore,
  minActScore,
  maxActScore,
  minTuition,
  maxTuition,
}: FilterOptions) => {
  return universitiesData.universities.filter(university => {
    // Location filter
    if (location && location !== 'all') {
      const universityRegion = getRegionFromState(university.location.state);
      if (universityRegion !== location) return false;
    }

    // Major filter
    if (major && major !== 'all') {
      if (!university.academics.popularMajors.includes(major)) return false;
    }

    // Acceptance rate filter
    if (minAcceptanceRate !== undefined && university.stats.acceptanceRate < minAcceptanceRate) return false;
    if (maxAcceptanceRate !== undefined && university.stats.acceptanceRate > maxAcceptanceRate) return false;

    // SAT score filter
    if (minSatScore !== undefined && university.admissions.sat.middle50.total[0] < minSatScore) return false;
    if (maxSatScore !== undefined && university.admissions.sat.middle50.total[1] > maxSatScore) return false;

    // ACT score filter
    if (minActScore !== undefined && university.admissions.act.middle50[0] < minActScore) return false;
    if (maxActScore !== undefined && university.admissions.act.middle50[1] > maxActScore) return false;

    // Tuition filter
    if (minTuition !== undefined && university.costs.tuition.inState < minTuition) return false;
    if (maxTuition !== undefined && university.costs.tuition.inState > maxTuition) return false;

    return true;
  });
};

// Calculate match score based on user profile
interface UserProfile {
  satScore?: number;
  actScore?: number;
  gpa?: number;
  preferredMajors?: string[];
  preferredLocation?: string;
}

export const calculateMatchScore = (university: University, profile: UserProfile): number => {
  let score = 0;
  let totalFactors = 0;

  // SAT Score Match (30% weight)
  if (profile.satScore) {
    const satRange = university.admissions.sat.middle50.total;
    const satScore = profile.satScore;
    
    if (satScore >= satRange[0] && satScore <= satRange[1]) {
      score += 30; // Perfect match
    } else if (satScore >= satRange[0] - 100 && satScore <= satRange[1] + 100) {
      score += 20; // Close match
    } else if (satScore >= satRange[0] - 200 && satScore <= satRange[1] + 200) {
      score += 10; // Acceptable match
    }
    totalFactors += 30;
  }

  // ACT Score Match (30% weight)
  if (profile.actScore) {
    const actRange = university.admissions.act.middle50;
    const actScore = profile.actScore;
    
    if (actScore >= actRange[0] && actScore <= actRange[1]) {
      score += 30; // Perfect match
    } else if (actScore >= actRange[0] - 2 && actScore <= actRange[1] + 2) {
      score += 20; // Close match
    } else if (actScore >= actRange[0] - 4 && actScore <= actRange[1] + 4) {
      score += 10; // Acceptable match
    }
    totalFactors += 30;
  }

  // GPA Match (20% weight)
  if (profile.gpa) {
    const gpaRange = university.admissions.gpa;
    const gpa = profile.gpa;
    
    if (gpa >= gpaRange.average - 0.1 && gpa <= gpaRange.average + 0.1) {
      score += 20; // Perfect match
    } else if (gpa >= gpaRange.average - 0.3 && gpa <= gpaRange.average + 0.3) {
      score += 15; // Close match
    } else if (gpa >= gpaRange.average - 0.5 && gpa <= gpaRange.average + 0.5) {
      score += 10; // Acceptable match
    }
    totalFactors += 20;
  }

  // Major Match (10% weight)
  if (profile.preferredMajors?.length) {
    const hasMatchingMajor = profile.preferredMajors.some(major =>
      university.academics.popularMajors.some(uniMajor =>
        uniMajor.toLowerCase().includes(major.toLowerCase())
      )
    );
    if (hasMatchingMajor) {
      score += 10;
    }
    totalFactors += 10;
  }

  // Location Match (10% weight)
  if (profile.preferredLocation) {
    if (university.location.state.toLowerCase() === profile.preferredLocation.toLowerCase()) {
      score += 10; // Exact match
    } else if (university.location.country.toLowerCase() === profile.preferredLocation.toLowerCase()) {
      score += 5; // Country match
    }
    totalFactors += 10;
  }

  // Calculate final percentage
  return Math.round((score / totalFactors) * 100);
}; 