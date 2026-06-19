export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const formatTime = (timeString) => {
  if (!timeString) return '';
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const generateReferenceId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `PLY-${timestamp}-${random}`;
};

export const getStatusColor = (status) => {
  const colors = {
    new: { bg: '#EBF5FF', text: '#1E40AF', border: '#93C5FD' },
    contacted: { bg: '#FFF7ED', text: '#C2410C', border: '#FDBA74' },
    confirmed: { bg: '#F0FDF4', text: '#15803D', border: '#86EFAC' },
    completed: { bg: '#F0FDF4', text: '#15803D', border: '#86EFAC' },
    cancelled: { bg: '#FEF2F2', text: '#DC2626', border: '#FCA5A5' },
  };
  return colors[status] || colors.new;
};

export const getSourceColor = (source) => {
  const colors = {
    booking_form: { bg: '#EBF5FF', text: '#1E40AF' },
    free_guide: { bg: '#F0FDF4', text: '#15803D' },
  };
  return colors[source] || colors.booking_form;
};

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
