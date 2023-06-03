import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PLATFORMS } from '../services/constants';
import usePlatformsHttp from './usePlatformsHttp';

const usePlatforms = () => {
  const { getPlatforms } = usePlatformsHttp();

  const { data, error, isLoading } = useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: getPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
  });

  const findPlatform = (id?: number) => data?.results.find((p) => p.id === id);

  return { platforms: data, error, isLoading, findPlatform };
};

export default usePlatforms;
