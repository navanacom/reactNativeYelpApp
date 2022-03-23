import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer sDK6j2YhTfSTfvQwJjXcjZ3dHcD3QJVEBTVqKHJpkUZPKuEhmqnm8_18_CloRENeKtUNEsqL_D8Jiq7nbEGN2xOgQ-0tphF7-UekWqa5clH6Sg7YGo9_smEHx9Q6YnYx'
    }
})

