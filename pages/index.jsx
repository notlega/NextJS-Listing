import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useQuery } from 'react-query';
import Skeleton from 'react-loading-skeleton';
import ButtonCard from '../components/ButtonCard';
import SampleImage from '../public/dp_image183-1160.jpg';

const Home = () => {
  const supabaseClient = useSupabaseClient();

  const [listings, setListings] = useState([]);

  const onClickConsoleLog = () => {
    console.log('clicked');
  };

  const onKeyboardRClick = (event) => {
    if (event.key.toLowerCase() === 'r') {
      listingsRefetch();
    }
  };

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
    <div className="space-y-8">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl">Listings</h1>
        <button className="btn btn-primary" onClick={listingsRefetch} onKeyDown={onKeyboardRClick}>
          Refresh (R)
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-2">
        <ButtonCard
          username="username"
          userProfilePicture={SampleImage}
          postedDate="today"
          listingImage={SampleImage}
          listingTitle="new listing"
          listingPrice={273}
          listingQuality="Brand New"
          onClickFunction={onClickConsoleLog}
        />
        <ButtonCard
          username="username"
          userProfilePicture={SampleImage}
          postedDate="today"
          listingImage={SampleImage}
          listingTitle="new listing"
          listingPrice={273}
          listingQuality="Brand New"
          onClickFunction={onClickConsoleLog}
        />
        <ButtonCard
          username="username"
          userProfilePicture={SampleImage}
          postedDate="today"
          listingImage={SampleImage}
          listingTitle="new listing"
          listingPrice={273}
          listingQuality="Brand New"
          onClickFunction={onClickConsoleLog}
        />
        <ButtonCard
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
