
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const countryCodes = [
  { code: '+40', country: 'RO' },
  { code: '+44', country: 'UK' },
  { code: '+1', country: 'US' },
  { code: '+49', country: 'DE' },
  { code: '+33', country: 'FR' },
  { code: '+39', country: 'IT' },
  { code: '+36', country: 'HU' },
  { code: '+43', country: 'AT' },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const [countryCode, setCountryCode] = React.useState('+40');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  
  React.useEffect(() => {
    // When external value changes
    if (value && !value.startsWith(countryCode)) {
      // Handle case when value doesn't include country code
      setPhoneNumber(value);
    } else if (value) {
      // Handle case when value includes country code
      setPhoneNumber(value.substring(countryCode.length));
    }
  }, [value, countryCode]);
  
  const handleCountryCodeChange = (newCountryCode: string) => {
    setCountryCode(newCountryCode);
    onChange(newCountryCode + phoneNumber);
  };
  
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    onChange(countryCode + newPhoneNumber);
  };

  return (
    <div className="flex">
      <Select value={countryCode} onValueChange={handleCountryCodeChange}>
        <SelectTrigger className="w-[100px] mr-2">
          <SelectValue placeholder="Prefix" />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {`${country.country} ${country.code}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Input
        type="tel"
        placeholder="Număr de telefon"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className="flex-1"
      />
    </div>
  );
};

export default PhoneInput;
