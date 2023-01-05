import { BasePath, ConfigsRootPath } from "../../index";


export const GetByIdConfigsBasePath = "/:id";

export const GetByIdConfigsPath = `${BasePath}${ConfigsRootPath}${GetByIdConfigsBasePath}`;

export type GetByIdConfigsParams = {
	id: string
}

export type GetByIdConfigsResponse = {
	config: {
		id: string,
		title: string,
		data: string,
		bundleId: string,
		carId: string
	}
};
