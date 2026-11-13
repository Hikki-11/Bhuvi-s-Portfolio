// Supabase configuration using requested variables
const SUPABASE_URL = "https://uxcizeklrfbsbdxtwnum.supabase.co/rest/v1/";
const SUPABASE_PUBLIC_KEY = "sb_publishable_3AeRnbsj4ycr5WYm7_gM2g__PGQiaa5";

// Robust Supabase client wrapper ensuring direct PostgREST REST endpoint compatibility
// and preventing PGRST125 path mismatch errors.
export const supabase = {
  from: (table) => ({
    insert: async (rows) => {
      try {
        const cleanBase = SUPABASE_URL.endsWith('/') ? SUPABASE_URL : SUPABASE_URL + '/';
        const url = `${cleanBase}${table}`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_PUBLIC_KEY,
            'Authorization': `Bearer ${SUPABASE_PUBLIC_KEY}`,
            'Prefer': 'return=preferred'
          },
          body: JSON.stringify(rows)
        });

        if (!response.ok) {
          const errBody = await response.text();
          let errJson;
          try {
            errJson = JSON.parse(errBody);
          } catch {
            errJson = { message: errBody || response.statusText };
          }
          return { data: null, error: errJson };
        }

        const data = await response.json().catch(() => null);
        return { data, error: null };
      } catch (err) {
        return { data: null, error: { message: err.message || 'Network error' } };
      }
    }
  })
};
