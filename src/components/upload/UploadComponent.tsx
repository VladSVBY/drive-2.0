import styles from "./Upload.module.scss"
import Button from "@/components/common/Button";
import {signIn, useSession} from "next-auth/react";
import {ChangeEvent, useState} from "react";
import {ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "@/FirebaseConfig";

export function UploadFilesComponent() {
    const {data: session} = useSession();
    return (
        <div hidden={!session}>
            <div className={styles.uploadFile}>
                <Button buttonClass="btn-success"
                        title="Create Folder"
                        onClick={signIn}></Button>
            </div>
            <div className={styles.uploadFile}>
                <input type="file"
                        onChange={(event => uploadFile(event))}
                       className="file-input file-input-bordered file-input-success w-full max-w-xs"></input>
                <Button buttonClass="btn-success"
                        title="Add File"
                        onClick={signIn}></Button>
            </div>
        </div>
    );
}

function uploadFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.item(0);
    const storageRef = ref(storage, `files/${file.name}`);
    uploadBytesResumable(storageRef, file);
}