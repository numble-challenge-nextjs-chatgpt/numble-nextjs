import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
} from 'react';

interface Props {
  children: ReactNode;
}

const Context = createContext<[string, Dispatch<string>]>(['', () => {}]);

export const TokenProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>('');

  return (
    <Context.Provider value={[token, setToken]}>{children}</Context.Provider>
  );
};

export function useTokenContext() {
  return useContext(Context);
}
