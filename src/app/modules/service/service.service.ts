import { TService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (payLoad: TService) => {
  const result = await Service.create(payLoad);
  return result;
};

export const serviceServices = {
  createService,
};
