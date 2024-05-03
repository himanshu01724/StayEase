import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://itbgbenzqcyeirdhfvql.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0YmdiZW56cWN5ZWlyZGhmdnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NTU4MzMsImV4cCI6MjAzMDEzMTgzM30.FK3LLyhuROHJYnUheuZuPaAh6qvRc41mWWKkZUAUsGg"
//row level security is enabled so no one can make changes to database
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;