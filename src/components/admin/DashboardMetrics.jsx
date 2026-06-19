import React from 'react';
import { Users, Calendar, Bell, CheckCircle2, TrendingUp } from 'lucide-react';
import MetricCard from '../ui/MetricCard';

export default function DashboardMetrics({ bookings = [], leads = [] }) {
  const totalLeads = leads.length;
  const totalBookings = bookings.length;
  const newRequests = bookings.filter(b => b.status === 'new').length;
  const confirmed = bookings.filter(b => b.status === 'confirmed').length;
  const completed = bookings.filter(b => b.status === 'completed').length;
  const conversionRate = totalBookings > 0
    ? Math.round(((confirmed + completed) / totalBookings) * 100)
    : 0;

  const metrics = [
    { title: 'Total Leads', value: totalLeads, icon: Users, color: '#1E1C1A' }, // Charcoal
    { title: 'Total Bookings', value: totalBookings, icon: Calendar, color: '#26211C' }, // Espresso
    { title: 'New Requests', value: newRequests, icon: Bell, color: '#C69C54' }, // Gold
    { title: 'Confirmed Sessions', value: confirmed, icon: CheckCircle2, color: '#3F372F' }, // Espresso Light
    { title: 'Conversion Rate', value: `${conversionRate}%`, icon: TrendingUp, color: '#B48B47' }, // Gold Hover
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric, i) => (
        <MetricCard key={i} {...metric} />
      ))}
    </div>
  );
}
