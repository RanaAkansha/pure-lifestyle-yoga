import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { services as seedServices, getServiceById as getSeedServiceById } from '../data/services';

export function useServices() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      if (!isSupabaseConfigured()) {
        setData(seedServices);
        setLoading(false);
        return;
      }

      try {
        const { data: services, error: fetchError } = await supabase
          .from('services')
          .select('*');

        if (fetchError) throw fetchError;
        setData(services?.length ? services : seedServices);
      } catch (err) {
        console.warn('Falling back to seed data:', err.message);
        setData(seedServices);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  const getServiceById = (id) => {
    return data.find(s => s.id === id) || getSeedServiceById(id);
  };

  return { data, loading, error, getServiceById };
}
