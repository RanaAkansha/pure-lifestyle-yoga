import React, { useState } from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { validateBookingForm } from '../../utils/validators';
import { services } from '../../data/services';
import { trainers } from '../../data/trainers';

const goalOptions = [
  { value: 'weight-loss', label: 'Weight Loss' },
  { value: 'stress-relief', label: 'Stress Relief' },
  { value: 'flexibility', label: 'Flexibility & Mobility' },
  { value: 'pain-relief', label: 'Pain Relief' },
  { value: 'prenatal', label: 'Prenatal Wellness' },
  { value: 'senior', label: 'Senior Fitness' },
  { value: 'corporate', label: 'Corporate Wellness' },
  { value: 'general', label: 'General Wellness' },
];

const timeOptions = [
  { value: '06:00', label: '6:00 AM' },
  { value: '07:00', label: '7:00 AM' },
  { value: '08:00', label: '8:00 AM' },
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '17:00', label: '5:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '20:00', label: '8:00 PM' },
];

export default function BookingForm({ initialData = {}, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    goal: '',
    service: initialData.service || '',
    trainer: initialData.trainer || '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateBookingForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  const serviceOptions = services.map(s => ({ value: s.id, label: s.title }));
  const trainerOptions = trainers.map(t => ({ value: t.id, label: `${t.name} – ${t.specialization}` }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info */}
      <div>
        <h3 className="font-heading font-semibold text-charcoal text-lg mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name *"
            id="booking-name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            icon={User}
          />
          <Input
            label="Email Address *"
            id="booking-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={Mail}
          />
          <Input
            label="Phone Number *"
            id="booking-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            icon={Phone}
          />
          <Input
            label="City *"
            id="booking-city"
            name="city"
            placeholder="Your city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            icon={MapPin}
          />
        </div>
      </div>

      {/* Session Preferences */}
      <div>
        <h3 className="font-heading font-semibold text-charcoal text-lg mb-4">
          Session Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Your Goal *"
            id="booking-goal"
            name="goal"
            options={goalOptions}
            placeholder="Select your goal"
            value={formData.goal}
            onChange={handleChange}
            error={errors.goal}
          />
          <Select
            label="Preferred Service *"
            id="booking-service"
            name="service"
            options={serviceOptions}
            placeholder="Select a service"
            value={formData.service}
            onChange={handleChange}
            error={errors.service}
          />
          <Select
            label="Preferred Trainer"
            id="booking-trainer"
            name="trainer"
            options={trainerOptions}
            placeholder="Any trainer"
            value={formData.trainer}
            onChange={handleChange}
          />
          <Input
            label="Preferred Date"
            id="booking-date"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            error={errors.preferredDate}
          />
          <Select
            label="Preferred Time"
            id="booking-time"
            name="preferredTime"
            options={timeOptions}
            placeholder="Select time"
            value={formData.preferredTime}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Notes */}
      <Textarea
        label="Additional Notes"
        id="booking-notes"
        name="notes"
        placeholder="Any health conditions, preferences, or questions..."
        value={formData.notes}
        onChange={handleChange}
        rows={3}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isLoading}
        className="w-full"
      >
        Submit Booking Request
      </Button>
    </form>
  );
}
