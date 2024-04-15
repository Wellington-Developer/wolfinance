import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import useFetch from "./Hooks/useFetch";
import IUser from "./interfaces/IUser";

interface IUserContext {
  data: IUser[] | null,
  loading: boolean,
  error: string | null,
  inicio: string;
  final: string;
  setInicio: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if(context === null) throw new Error("Context deve ser lido em APP");
  return context;
}

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [ inicio, setInicio ] = useState("");
  const [ final, setFinal ] = useState("");
  const [ data, loading, error ] = useFetch<IUser[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`, {})
  if(!data) return;
  return (
    <UserContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal }}>{children}</UserContext.Provider>
  )
}