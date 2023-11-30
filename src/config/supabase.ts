import { createClient } from '@supabase/supabase-js';

const supabaseUrl = Bun.env.SUPABASE_URL || "";
const supabaseKey = Bun.env.SUPABASE_SERVICE_ROLE || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;