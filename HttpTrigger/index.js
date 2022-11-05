module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = "Amit"
    const responseMessage = "Hello, " + name + ". This HTTP triggered function executed successfully."

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}