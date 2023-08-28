const { user, password } = process.env;

export const connnectionSrt = `mongodb+srv://${user}:${password}@cluster0.bv0zeff.mongodb.net/productDB?retryWrites=true&w=majority`;
