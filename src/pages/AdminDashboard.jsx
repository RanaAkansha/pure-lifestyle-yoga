import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Leaf, ArrowLeft } from 'lucide-react';
import DashboardMetrics from '../components/admin/DashboardMetrics';
import BookingsTable from '../components/admin/BookingsTable';
import LeadsTable from '../components/admin/LeadsTable';
import { useBookings } from '../hooks/useBookings';
import { useLeads } from '../hooks/useLeads';

const tabs = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'Bookings', icon: Calendar },
  { id: 'leads', label: 'Leads', icon: Users },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { data: bookings, loading: bookingsLoading, updateBookingStatus } = useBookings();
  const { data: leads, loading: leadsLoading } = useLeads();

  const handleStatusChange = async (bookingId, newStatus) => {
    await updateBookingStatus(bookingId, newStatus);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream-200)]">
      {/* Top Bar */}
      <header className="bg-[var(--color-espresso)] shadow-md sticky top-0 z-50 text-white">
        <div className="container-lg mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/80 hover:text-[var(--color-gold)] transition-colors"
              >
                <ArrowLeft size={18} />
                <span className="text-sm font-heading hidden sm:inline">Back to Site</span>
              </Link>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                  <Leaf size={16} className="text-[var(--color-gold)]" />
                </div>
                <span className="font-heading font-bold text-white hidden sm:inline">
                  Admin Dashboard
                </span>
              </div>
            </div>

            {/* Tabs */}
            <nav className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-3 md:px-4 py-2 rounded-[var(--radius-md)]
                    text-sm font-heading font-medium transition-colors cursor-pointer
                    ${activeTab === tab.id
                      ? 'bg-[var(--color-gold)] text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <tab.icon size={16} />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-lg mx-auto px-4 md:px-6 py-8">
        {/* Loading State */}
        {(bookingsLoading || leadsLoading) && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <svg className="animate-spin h-8 w-8 text-[var(--color-gold)] mx-auto mb-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-warm-gray-600 font-heading">Loading dashboard data...</p>
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {!bookingsLoading && !leadsLoading && activeTab === 'overview' && (
          <div className="space-y-8">
            <DashboardMetrics bookings={bookings} leads={leads} />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <BookingsTable
                bookings={bookings.slice(0, 5)}
                onStatusChange={handleStatusChange}
              />
              <LeadsTable leads={leads.slice(0, 5)} />
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {!bookingsLoading && activeTab === 'bookings' && (
          <BookingsTable
            bookings={bookings}
            onStatusChange={handleStatusChange}
          />
        )}

        {/* Leads Tab */}
        {!leadsLoading && activeTab === 'leads' && (
          <LeadsTable leads={leads} />
        )}

        {/* Empty State Info */}
        {!bookingsLoading && !leadsLoading && bookings.length === 0 && leads.length === 0 && (
          <div className="mt-8 bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)] p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-cream-200)] flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard size={32} className="text-[var(--color-gold)]" />
            </div>
            <h3 className="font-heading font-semibold text-charcoal text-xl mb-2">
              Welcome to the Admin Dashboard
            </h3>
            <p className="text-warm-gray-600 max-w-md mx-auto mb-6">
              Your dashboard is ready! Bookings and leads will appear here as customers
              interact with your website. Try submitting a booking to see it in action.
            </p>
            <Link to="/booking">
              <button className="px-6 py-3 bg-[var(--color-gold)] text-white rounded-[var(--radius-md)] font-heading font-medium hover:bg-[var(--color-espresso-light)] transition-colors cursor-pointer">
                Try a Test Booking
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
