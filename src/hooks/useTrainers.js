import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { trainers as seedTrainers, getTrainerById as getSeedTrainerById } from '../data/trainers';

export function useTrainers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrainers() {
      if (!isSupabaseConfigured()) {
        setData(seedTrainers);
        setLoading(false);
        return;
      }

      try {
        const { data: trainers, error: fetchError } = await supabase
          .from('trainers')
          .select('*')
          .order('rating', { ascending: false });

        if (fetchError) throw fetchError;
        setData(trainers?.length ? trainers : seedTrainers);
      } catch (err) {
        console.warn('Falling back to seed data:', err.message);
        setData(seedTrainers);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTrainers();
  }, []);

  const getTrainerById = (id) => {
    return data.find(t => t.id === id) || getSeedTrainerById(id);
  };

  return { data, loading, error, getTrainerById };
}
