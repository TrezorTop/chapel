import { BasePath, MeRootPath } from "../../index";


export const GetMyConfigsBasePath = "/configs";

export const GetMyConfigsPath = `${BasePath}${MeRootPath}${GetMyConfigsBasePath}`;

export type GetMyConfigsResponse = {
	configs: {
		id: string,
		title: string,
		data: string
	}[]
};