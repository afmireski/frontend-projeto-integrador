import axios from 'axios';

function FinishPurchase() {
    console.log("called", process.env)
    return Promise.resolve(axios.post(`${process.env.API_URL}/purchases/finish`))
    .then(response => {
        if(response.status.toString() == '200'){
            return response.data;
        } 
        return response.data;
    })
    .catch(error => {
        throw('error');
    });
}

export default FinishPurchase;
