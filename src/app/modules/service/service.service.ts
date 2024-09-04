import { TService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (payLoad: TService) => {
  const result = await Service.create(payLoad);
  return result;
};

const getSingleService = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};

const getAllServices = async () => {
  const result = await Service.find();
  return result;
};

const updateService = async (id: string, payLoad: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate(
    id,
    { $set: { ...payLoad } },
    { new: true }
  );
  return result;
};

export const serviceServices = {
  createService,
  getSingleService,
  getAllServices,
  updateService,
};
