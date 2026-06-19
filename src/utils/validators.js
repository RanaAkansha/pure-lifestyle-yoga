export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[+]?[\d\s-]{10,15}$/;
  return re.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

export const validateFutureDate = (dateString) => {
  if (!dateString) return false;
  const selected = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected >= today;
};

export const validateBookingForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!validateRequired(formData.city)) {
    errors.city = 'City is required';
  }

  if (!validateRequired(formData.goal)) {
    errors.goal = 'Please select your goal';
  }

  if (!validateRequired(formData.service)) {
    errors.service = 'Please select a service';
  }

  if (formData.preferredDate && !validateFutureDate(formData.preferredDate)) {
    errors.preferredDate = 'Please select a future date';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateLeadForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
