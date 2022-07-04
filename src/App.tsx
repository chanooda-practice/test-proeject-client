import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
