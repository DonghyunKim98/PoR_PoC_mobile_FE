import { PropsWithChildren } from 'react';
import {
  QueryClient as ReactQueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query';

import { defaultAxios } from '@/utils';

type QueryClientProviderProps = PropsWithChildren<{}>;

export const queryClient = new ReactQueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url, requestedData] }) => {
        if (typeof url === 'string') {
          const { data } = await defaultAxios.get(url, {
            params: requestedData,
          });

          return data;
        }
        throw new Error('Invalid QueryKey');
      },
      useErrorBoundary: true,
      suspense: false, // no suspense, use loading
      cacheTime: 0, // no-cache
    },
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
