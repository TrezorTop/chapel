import cuid from "cuid";
import { FastifyInstance } from "fastify";
import { StatusCodes } from "http-status-codes";
import {
	GetAllConfigsBasePath,
	GetAllConfigsQuery,
	GetAllConfigsResponse
} from "../../../../shared/endpoints/configs/getAllConfigs";
import { Validator } from "../../../../shared/types";
import { prisma } from "../../infrastructure/prismaConnect";
import { validatePreValidationHook } from "../../infrastructure/validatePreValidationHook";


const queryValidator: Validator<GetAllConfigsQuery> = {
	carId: {
		check: [value => cuid.isCuid(value) || "Невалидный id"],
		required: false
	},
	bundleId: {
		check: [value => cuid.isCuid(value) || "Невалидный id"],
		required: false
	}
};


export const getAll = async (instance: FastifyInstance) => {
	instance.get<{
		Reply: GetAllConfigsResponse,
		Querystring: GetAllConfigsQuery
	}>(GetAllConfigsBasePath, {
		preValidation: [validatePreValidationHook({ query: queryValidator })]
	}, async (request, reply) => {
		const query = request.query;

		const configs = await prisma.config.findMany({
			where: {
				carId: query.carId,
				bundleId: query.bundleId,
				softDeleted: false
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