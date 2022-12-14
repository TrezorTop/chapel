import { FastifyPluginAsync } from "fastify/types/plugin";
import { create } from "./create";
import { deleteById } from "./deleteById";
import { getAll } from "./getAll";


export const configsModule: FastifyPluginAsync = async (instance) => {
	instance.register(getAll);
	instance.register(create);
	instance.register(deleteById);
};