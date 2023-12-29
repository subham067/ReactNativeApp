import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";




async function getProducts(data) {
    let endpoint = 'products';
    return HttpClient.get(endpoint);
}

const MainServices = {
    getProducts,
}

export default MainServices;