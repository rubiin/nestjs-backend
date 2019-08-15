export const HTTP_RESPONSE = (statusCode: number, message: string, error: string | Array<string>) => {
    return {
        statusCode,
        error: error || undefined,
        message

    };

};