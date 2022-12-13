import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Login = () => {
  const supabaseClient = useSupabaseClient();

  const discordLogin = () => {
    const { data, error } = supabaseClient.auth.signInWithOAuth({ provider: 'discord' });
  };

  return <button onClick={discordLogin}>discord</button>;
};

export default Login;
