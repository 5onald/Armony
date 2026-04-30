import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

async function probarConexion() {
  const { data, error } = await supabase
    .from('mesas')
    .select('*')

  console.log('DATA:', data)
  console.log('ERROR:', error)
}

probarConexion()