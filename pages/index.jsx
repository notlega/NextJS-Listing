import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useQuery } from 'react-query';
import Skeleton from 'react-loading-skeleton';
import Card from '../components/ButtonCard';
import SampleImage from '../public/dp_image183-1160.jpg';

const Home = () => {
  const supabaseClient = useSupabaseClient();

  const [listings, setListings] = useState([]);

	const onClickConsoleLog = () => {
		console.log('clicked');
	}

  const {
    isError: listingsError,
    isLoading: listingsLoading,
    status: listingsStatus,
    refetch: listingsRefetch,
  } = useQuery(
    'get_listings',
    async () => supabaseClient.rpc('get_listings', { limit: 10, offset: 0 }),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      onSuccess: (data) => setListings(data),
    }
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl">Listings</h1>
        <button className="btn btn-primary" onClick={listingsRefetch}>
          Refresh
        </button>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Card
          username="username"
          userProfilePicture={SampleImage}
          postedDate="today"
          listingImage={SampleImage}
          listingTitle="new listing"
          listingPrice={273}
          listingQuality="Brand New"
					onClickFunction={onClickConsoleLog}
        />
        <Card
          username="username"
          userProfilePicture={SampleImage}
          postedDate="today"
          listingImage={SampleImage}
          listingTitle="new listing"
          listingPrice={273}
          listingQuality="Brand New"
					onClickFunction={onClickConsoleLog}
        />
				<Card
          username="username"
          userProfilePicture={SampleImage}
          postedDate="today"
          listingImage={SampleImage}
          listingTitle="new listing"
          listingPrice={273}
          listingQuality="Brand New"
					onClickFunction={onClickConsoleLog}
        />
      </div>
    </div>
  );
};

export default Home;
