import {createClient} from '@supabase/supabase-js';

const env=(typeof process!=='undefined' && process.env) || (import.meta as ImportMeta & {env?:Record<string,string|undefined>}).env;
const url=env?.NEXT_PUBLIC_SUPABASE_URL ?? env?.VITE_SUPABASE_URL;
const publishableKey=env?.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? env?.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase=url&&publishableKey?createClient(url,publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
export const isSupabaseConfigured=Boolean(supabase);
