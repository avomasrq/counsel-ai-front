
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CountrySelectorProps {
  selectedCountries: string[];
  onCountriesChange: (countries: string[]) => void;
  maxSelections?: number;
}

const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
  { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' }
];

const CountrySelector = ({ selectedCountries, onCountriesChange, maxSelections = 5 }: CountrySelectorProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleAddCountry = (countryCode: string) => {
    if (!selectedCountries.includes(countryCode) && selectedCountries.length < maxSelections) {
      onCountriesChange([...selectedCountries, countryCode]);
    }
    setSelectedValue('');
  };

  const handleRemoveCountry = (countryCode: string) => {
    onCountriesChange(selectedCountries.filter(code => code !== countryCode));
  };

  const getCountryName = (code: string) => {
    return COUNTRIES.find(country => country.code === code)?.name || code;
  };

  const getCountryFlag = (code: string) => {
    return COUNTRIES.find(country => country.code === code)?.flag || '';
  };

  const availableCountries = COUNTRIES.filter(country => !selectedCountries.includes(country.code));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Preferred Countries</label>
        <span className="text-xs text-muted-foreground">
          {selectedCountries.length}/{maxSelections} selected
        </span>
      </div>
      
      <Select value={selectedValue} onValueChange={handleAddCountry}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Add a country..." />
        </SelectTrigger>
        <SelectContent>
          {availableCountries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center space-x-2">
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedCountries.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCountries.map((countryCode) => (
            <Badge key={countryCode} variant="secondary" className="flex items-center space-x-1">
              <span>{getCountryFlag(countryCode)}</span>
              <span>{getCountryName(countryCode)}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 ml-1"
                onClick={() => handleRemoveCountry(countryCode)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
