import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Stack } from "expo-router";
import "../global.css"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout() {
  return <ClerkProvider tokenCache={tokenCache}>
    <QueryClientProvider client={queryClient}>
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </QueryClientProvider>
  </ClerkProvider>
}
