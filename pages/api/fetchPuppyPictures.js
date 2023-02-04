import axios from "axios"

const fetchPuppyPictures = async () => {
    try {
        const response = await axios.get(
            "https://dog.ceo/api/breeds/image/random"
        )
        const imageSrc = response.data.message
        return { props: { imageSrc } }
    } catch (error) {
        console.log(error)
        return { props: { imageSrc: "" } }
    }
}

export default fetchPuppyPictures
