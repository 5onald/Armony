import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Faltan variables de entorno de Supabase. Revisa el archivo .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function probarConexion() {
  const { data, error } = await supabase
    .from('zona_descanso1')
    .select('*')

  if (error) {
    console.error('ERROR SUPABASE:', error)
    return
  }

  console.log('DATA SUPABASE:', data)
}