import { useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export function useLeads() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeads = useCallback(async () => {
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data: leads, error: fetchError } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setData(leads || []);
    } catch (err) {
      console.error('Error fetching leads:', err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const createLead = async (leadData) => {
    if (!isSupabaseConfigured()) {
      // Return mock success for demo
      const mockLead = { ...leadData, id: Date.now(), created_at: new Date().toISOString() };
      setData(prev => [mockLead, ...prev]);
      return { success: true, data: mockLead };
    }

    try {
      const { data: lead, error: insertError } = await supabase
        .from('leads')
        .insert([{
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          source: leadData.source || 'free_guide',
        }])
        .select()
        .single();

      if (insertError) throw insertError;

      await fetchLeads();
      return { success: true, data: lead };
    } catch (err) {
      console.error('Error creating lead:', err.message);
      return { success: false, error: err.message };
    }
  };

  return { data, loading, error, createLead, refetch: fetchLeads };
}
