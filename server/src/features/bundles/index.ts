import { FastifyPluginAsync } from "fastify/types/plugin";
import { create } from "./create";
import { deleteById } from "./deleteById";
import { getAll } from "./getAll";
import { update } from "./update";


export const bundlesModule: FastifyPluginAsync = async (instance) => {
	instance.register(getAll);
	instance.register(deleteById);
	instance.register(create);
	instance.register(update);
};