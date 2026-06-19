-- supabase_schema.sql
-- Run this script in your Supabase SQL Editor to instantly set up your database.

-- 1. Create the 'services' table
CREATE TABLE IF NOT EXISTS public.services (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration TEXT,
    price TEXT,
    icon TEXT,
    color TEXT
);

-- Seed initial services data with correct IDs matching frontend
INSERT INTO public.services (id, title, description, duration, price) VALUES
    ('service-1', 'Weight Loss Yoga', 'Dynamic yoga sequences designed to boost metabolism and build lean muscle.', '60 min / session', '₹2,500 / session'),
    ('service-2', 'Stress Relief Yoga', 'A calming blend of restorative yoga, breathwork, and guided meditation.', '45-60 min / session', '₹2,000 / session'),
    ('service-3', 'Therapeutic Yoga', 'Specialized yoga therapy targeting chronic pain, injuries, and specific conditions.', '60 min / session', '₹3,000 / session'),
    ('service-4', 'Senior Citizen Yoga', 'Gentle, accessible yoga sessions designed specifically for seniors.', '45 min / session', '₹1,800 / session'),
    ('service-5', 'Prenatal Yoga', 'Safe, nurturing yoga sessions for expecting mothers at every trimester.', '45 min / session', '₹2,500 / session'),
    ('service-6', 'Corporate Wellness', 'Customized wellness programs for companies including desk yoga.', '60-90 min / session', 'Custom Pricing')
ON CONFLICT (id) DO NOTHING;

-- 2. Create the 'trainers' table
CREATE TABLE IF NOT EXISTS public.trainers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    specialties TEXT[],
    experience TEXT,
    bio TEXT,
    image TEXT
);

-- Seed initial trainers data with correct IDs matching frontend
INSERT INTO public.trainers (id, name, role, specialties, experience, bio) VALUES
    ('trainer-1', 'Akta Shukla', 'Founder & Lead Educator', ARRAY['Vinyasa Flow', 'Therapeutic Yoga', 'Mindfulness'], '12+ Years', 'Akta founded Pure Lifestyle Yoga with a vision to bring authentic, highly personalized wellness into people''s homes.'),
    ('trainer-2', 'Samresh Keshyap', 'Founder & Master Practitioner', ARRAY['Ashtanga', 'Breathwork', 'Corporate Wellness'], '15+ Years', 'Samresh specializes in building resilience and physical strength through traditional practices adapted for the modern lifestyle.'),
    ('trainer-3', 'Priya Desai', 'Prenatal & Postnatal Yoga', ARRAY['Prenatal Yoga', 'Women''s Health'], '10 Years', 'Priya is passionate about supporting women through their pregnancy journey and beyond.'),
    ('trainer-4', 'Arjun Kapoor', 'Stress Relief & Mindfulness', ARRAY['MBSR', 'Pranayama', 'Restorative'], '15 Years', 'Arjun is a master practitioner of restorative yoga and meditation with 15 years of teaching experience.'),
    ('trainer-5', 'Kavita Reddy', 'Senior Citizen & Gentle Yoga', ARRAY['Chair Yoga', 'Geriatric Fitness'], '9 Years', 'Kavita specializes in creating gentle, accessible yoga sessions for seniors and individuals with limited mobility.'),
    ('trainer-6', 'Vikram Singh', 'Corporate Wellness & Power Yoga', ARRAY['Corporate Wellness', 'Ashtanga'], '11 Years', 'Vikram has designed and delivered corporate wellness programs for over 50 organizations.')
ON CONFLICT (id) DO NOTHING;

-- 3. Create the 'leads' table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    source TEXT DEFAULT 'free_guide',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Create the 'bookings' table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    reference_id TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT,
    goal TEXT,
    service_id TEXT REFERENCES public.services(id),
    trainer_id TEXT REFERENCES public.trainers(id),
    preferred_date TEXT,
    preferred_time TEXT,
    notes TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Set up Row Level Security (RLS)
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.services;
CREATE POLICY "Enable read access for all users" ON public.services FOR SELECT USING (true);

ALTER TABLE public.trainers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.trainers;
CREATE POLICY "Enable read access for all users" ON public.trainers FOR SELECT USING (true);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.leads;
DROP POLICY IF EXISTS "Enable select for all users" ON public.leads;
CREATE POLICY "Enable insert for all users" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable select for all users" ON public.leads FOR SELECT USING (true);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.bookings;
DROP POLICY IF EXISTS "Enable select for all users" ON public.bookings;
DROP POLICY IF EXISTS "Enable update for all users" ON public.bookings;
CREATE POLICY "Enable insert for all users" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable select for all users" ON public.bookings FOR SELECT USING (true);
CREATE POLICY "Enable update for all users" ON public.bookings FOR UPDATE USING (true);

-- Done! Your Supabase database is fully configured for Pure Lifestyle Yoga.
