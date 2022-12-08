import { useState } from 'react';
import PropTypes from 'prop-types';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

const App = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </SessionContextProvider>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default App;
