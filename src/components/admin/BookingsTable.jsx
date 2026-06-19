import React, { useState } from 'react';
import { Search } from 'lucide-react';
import StatusDropdown from '../ui/StatusDropdown';
import { formatDate } from '../../utils/formatters';

export default function BookingsTable({ bookings = [], onStatusChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = bookings.filter(b => {
    const matchesSearch = !searchTerm ||
      b.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.reference_id?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-warm-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="font-heading font-semibold text-charcoal text-lg">
            Bookings ({filtered.length})
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {/* Search */}
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or ref..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-warm-gray-200 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] w-full sm:w-64"
              />
            </div>
            {/* Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 text-sm border border-warm-gray-200 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] cursor-pointer appearance-none bg-white"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-cream-100">
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider">Ref ID</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider">Name</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider hidden md:table-cell">Contact</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider hidden lg:table-cell">Goal</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider hidden lg:table-cell">Service</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider hidden xl:table-cell">Date</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider">Status</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider hidden md:table-cell">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center text-warm-gray-400">
                  {bookings.length === 0
                    ? 'No bookings yet. They will appear here once customers submit booking requests.'
                    : 'No bookings match your search criteria.'
                  }
                </td>
              </tr>
            ) : (
              filtered.map((booking) => (
                <tr key={booking.id} className="hover:bg-cream-50 transition-colors">
                  <td className="px-4 md:px-6 py-4">
                    <span className="text-xs font-mono font-medium text-[var(--color-espresso)] bg-[var(--color-cream-200)] px-2 py-1 rounded">
                      {booking.reference_id}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <p className="text-sm font-medium text-charcoal">{booking.name}</p>
                    <p className="text-xs text-warm-gray-400 md:hidden">{booking.email}</p>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                    <p className="text-sm text-charcoal">{booking.email}</p>
                    <p className="text-xs text-warm-gray-400">{booking.phone}</p>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm text-warm-gray-600 capitalize">{booking.goal}</span>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm text-warm-gray-600">
                      {booking.services?.title || '—'}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden xl:table-cell">
                    <span className="text-sm text-warm-gray-600">
                      {booking.preferred_date ? formatDate(booking.preferred_date) : '—'}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <StatusDropdown
                      currentStatus={booking.status}
                      onStatusChange={(newStatus) => onStatusChange(booking.id, newStatus)}
                    />
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                    <span className="text-xs text-warm-gray-400">
                      {formatDate(booking.created_at)}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
