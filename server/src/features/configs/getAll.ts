import cuid from "cuid";
import { FastifyInstance } from "fastify";
import { StatusCodes } from "http-status-codes";
import {
	GetAllConfigsBasePath,
	GetAllConfigsParams,
	GetAllConfigsResponse
} from "../../../../shared/endpoints/configs/getAllConfigs";
import { Validator } from "../../../../shared/types";
import { prisma } from "../../infrastructure/prismaConnect";
import { validatePreValidationHook } from "../../infrastructure/validatePreValidationHook";


const paramsValidator: Validator<GetAllConfigsParams> = {
	carId: [
		value => cuid.isCuid(value) || "Невалидный id"
	],
	bundleId: [
		value => cuid.isCuid(value) || "Невалидный id"
	]
};


export const getAll = async (instance: FastifyInstance) => {
	instance.get<{
		Reply: GetAllConfigsResponse,
		Params: GetAllConfigsParams
	}>(GetAllConfigsBasePath, {
		preValidation: [validatePreValidationHook({ params: paramsValidator })]
	}, async (request, reply) => {
		const query = request.params;

		const configs = await prisma.config.findMany({
			where: {
				carId: query.carId,
				bundleId: query.bundleId
			},
			select: {
				id: true,
				title: true,
				data: true
			}
		});

		return reply.status(StatusCodes.OK).send({ configs: configs });
	});
};