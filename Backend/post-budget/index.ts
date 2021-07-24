
import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
	const body = req.body

	context.res = {
		body
	}
};

export default httpTrigger;