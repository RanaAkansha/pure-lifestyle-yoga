import { useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { generateReferenceId } from '../utils/formatters';

export function useBookings() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = useCallback(async () => {
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data: bookings, error: fetchError } = await supabase
        .from('bookings')
        .select(`
          *,
          services (title),
          trainers (name)
        `)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setData(bookings || []);
    } catch (err) {
      console.error('Error fetching bookings:', err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const createBooking = async (bookingData) => {
    const referenceId = generateReferenceId();

    if (!isSupabaseConfigured()) {
      // Return mock success for demo
      return {
        success: true,
        referenceId,
        data: { ...bookingData, reference_id: referenceId, id: Date.now() },
      };
    }

    try {
      const { data: booking, error: insertError } = await supabase
        .from('bookings')
        .insert([{
          reference_id: referenceId,
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          city: bookingData.city,
          goal: bookingData.goal,
          service_id: bookingData.service || null,
          trainer_id: bookingData.trainer || null,
          preferred_date: bookingData.preferredDate || null,
          preferred_time: bookingData.preferredTime || null,
          notes: bookingData.notes || null,
          status: 'new',
        }])
        .select()
        .single();

      if (insertError) throw insertError;

      // Also create a lead entry
      await supabase.from('leads').insert([{
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        source: 'booking_form',
      }]);

      await fetchBookings();
      return { success: true, referenceId, data: booking };
    } catch (err) {
      console.error('Error creating booking:', err.message);
      return { success: false, error: err.message };
    }
  };

  const updateBookingStatus = async (bookingId, newStatus) => {
    if (!isSupabaseConfigured()) {
      setData(prev =>
        prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b)
      );
      return { success: true };
    }

    try {
      const { error: updateError } = await supabase
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', bookingId);

      if (updateError) throw updateError;

      setData(prev =>
        prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b)
      );
      return { success: true };
    } catch (err) {
      console.error('Error updating booking:', err.message);
      return { success: false, error: err.message };
    }
  };

  return { data, loading, error, createBooking, updateBookingStatus, refetch: fetchBookings };
}
