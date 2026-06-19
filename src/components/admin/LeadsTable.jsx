import React from 'react';
import Badge from '../ui/Badge';
import { formatDate, getSourceColor } from '../../utils/formatters';

export default function LeadsTable({ leads = [] }) {
  return (
    <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-warm-gray-200">
        <h3 className="font-heading font-semibold text-charcoal text-lg">
          Leads ({leads.length})
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-cream-100">
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider">Name</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider">Email</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider hidden md:table-cell">Phone</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider">Source</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs font-heading font-semibold text-warm-gray-600 uppercase tracking-wider hidden md:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-gray-100">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-warm-gray-400">
                  No leads captured yet. Leads from booking forms and free guide downloads will appear here.
                </td>
              </tr>
            ) : (
              leads.map((lead) => {
                const sourceLabel = lead.source === 'booking_form' ? 'Booking Form' : 'Free Guide';
                const sourceColor = getSourceColor(lead.source);

                return (
                  <tr key={lead.id} className="hover:bg-cream-50 transition-colors">
                    <td className="px-4 md:px-6 py-4">
                      <span className="text-sm font-medium text-charcoal">{lead.name}</span>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className="text-sm text-warm-gray-600">{lead.email}</span>
                    </td>
                    <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-warm-gray-600">{lead.phone}</span>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <Badge color={sourceColor}>{sourceLabel}</Badge>
                    </td>
                    <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                      <span className="text-xs text-warm-gray-400">
                        {formatDate(lead.created_at)}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
