import { BasePath, CarsRootPath } from "../../index";


export const DeleteByIdCarsBasePath = "/:id";

export const DeleteByIdCarsPath = `${BasePath}${CarsRootPath}${DeleteByIdCarsBasePath}`;

export type DeleteByIdCarsResponse = {
	configs?: {
		id: string,
		title: string
	}[]
};