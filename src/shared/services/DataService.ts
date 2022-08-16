import { IData } from "../../models/IData";
import { Api } from "./api/config";

const PegarTudo = async (): Promise<IData[]> => {
  const response = await Api.get("/data");
  return response.data;
};

export const DataService = { PegarTudo };
