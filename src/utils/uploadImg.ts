import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

export const addImg = async (file: File) => {
    let downloadURLreturn = "vazioklkkk"
    if (file) {
        await (() => {
            const storage = getStorage();
            const storageRef = ref(storage, "user" + Math.random() * 100);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    console.error(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        downloadURLreturn = downloadURL
                        return downloadURLreturn
                    });
                }
            );
        })

    } else {
        alert("Você precisa de uma imagem do seu rosto para continuar");
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addImg
}