import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput.jsx';
import SelectFilter from './SelectFilter.jsx';
import Button from './Button.jsx';

/**
 * Onboarding form used to collect basic user information during signup.
 *
 * This implementation includes fields for full name, age, gender (with
 * support for an “Other” option that reveals an additional text field) and
 * personality type.  Upon clicking the Next button the user is navigated
 * to the dashboard page.  Extend this component to include additional
 * onboarding steps, validation and persistence as needed.
 */
export default function OnboardingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    otherGender: '',
    personality: '',
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Normally you would validate and save the data before navigating.
    navigate('/dashboard');
  };

  return (
    <form
      className="w-full max-w-md mx-auto p-4 space-y-4 bg-white rounded-xl shadow-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="font-heading text-lg text-primary">Tell us about yourself</h2>

      <FormInput
        label="Full Name"
        value={form.name}
        onChange={handleChange('name')}
        placeholder="John Doe"
        required
      />
      <FormInput
        label="Age"
        type="number"
        value={form.age}
        onChange={handleChange('age')}
        min="0"
        required
      />
      <div className="space-y-2">
        <span className="font-heading text-sm text-neutralDark">Gender</span>
        <div className="flex gap-4">
          <label className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === 'male'}
              onChange={handleChange('gender')}
            />
            Male
          </label>
          <label className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === 'female'}
              onChange={handleChange('gender')}
            />
            Female
          </label>
          <label className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="gender"
              value="other"
              checked={form.gender === 'other'}
              onChange={handleChange('gender')}
            />
            Other
          </label>
        </div>
        {form.gender === 'other' && (
          <FormInput
            label="Please specify"
            value={form.otherGender}
            onChange={handleChange('otherGender')}
            required
          />
        )}
      </div>
      <SelectFilter
        label="Personality"
        options={[
          { value: '', label: 'Select personality' },
          { value: 'introvert', label: 'Introvert' },
          { value: 'extrovert', label: 'Extrovert' },
          { value: 'ambivert', label: 'Ambivert' },
        ]}
        value={form.personality}
        onChange={handleChange('personality')}
        required
      />
      <div className="text-right">
        <Button onClick={handleNext}>Next →</Button>
      </div>
    </form>
  );
}