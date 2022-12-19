import { RequestHandler } from "express";
import * as core from "express-serve-static-core";
import { StatusCodes } from "http-status-codes";
import { ApplicationError } from "./applicationErrorHandler";


export async function cancelIfFailed<T>(func: () => Promise<T>, status: StatusCodes,
                                        message: string): Promise<NonNullable<T>> {
	let result: T;

	try {
		result = await func();
	} catch (e) {
		throw new ApplicationError(status, message);
	}

	if (!result)
		throw new ApplicationError(status, message);

	return result;
}


export function cancelIfFalsy<T>(target: T, error: ApplicationError): asserts target is NonNullable<T> {
	if (!target)
		throw error;
}


export function asyncWrapper<
	P = core.ParamsDictionary,
	ResBody = any,
	ReqBody = any,
	ReqQuery = core.Query,
	Locals extends Record<string, any> = Record<string, any>
>(handler: RequestHandler<
	P,
	ResBody,
	ReqBody,
	ReqQuery,
	Locals
>) {
	const changedHandler: RequestHandler<
		P,
		ResBody,
		ReqBody,
		ReqQuery,
		Locals
	> = (req, res, next) => {
		// @ts-ignore
		handler(req, res, next).catch((err) => next(err));
	};

	return changedHandler;
}