import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Characters from '../components/Characters'




const queryClient = new QueryClient()

const Home: NextPage = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </div>
    </div>
  )
}

export default Home
