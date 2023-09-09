import {storage, database} from "@/FirebaseConfig";
import {NextApiRequest, NextApiResponse} from "next";
import {ref, uploadBytesResumable} from "@firebase/storage";

const firestore = (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json({text: "Hello World!"})
}

export default firestore
