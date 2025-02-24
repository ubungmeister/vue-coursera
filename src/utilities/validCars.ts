import {z} from 'zod'
import { CarType } from "@/types/carType"

const carSchema = z.object({
    id: z.number(),
    name: z.string(),
    partOfYear: z.object({
        summer: z.number(),
        autumn: z.number(),
        winter: z.number(),
      }),
    typeOfRoad: z.object({
        city: z.number(),
        outsideCity: z.number(),
        highway: z.number(),
      }),
    drivingStyle: z.object({
        snail: z.number(),
        normal: z.number(),
        aggressive: z.number(),
      }),
    fullRange: z.number(),
    heatingConsumption: z.number(),   
    coolingConsumption: z.number(),
    imgSrc: z.string(),
})

export const validCars = (cars: unknown[]): CarType[] => {
  const validCars = cars.filter((car): car is CarType => carSchema.safeParse(car).success);
  return validCars;
};

