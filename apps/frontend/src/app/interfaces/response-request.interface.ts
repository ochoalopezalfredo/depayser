export interface ResponseRequest {
    entry: any,
    response: {
        modules: {
            module: Array<any>
        }
    },
    status: string,
    msg: string
}