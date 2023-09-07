import Button from "@/components/common/Button";
import {signIn, signOut, useSession} from "next-auth/react";
import styles from "./HeaderBar.module.scss"

export default function HeaderBar() {
    const {data: session} = useSession();
    console.log(session);
    return (
        <div className={styles.authBtn}>
            {
                !session
                    ? <Button buttonClass="btn-primary" title="Sign Up" onClick={signIn}></Button>

                    : <img src={session.user.image as string} alt="Profile Image" className={styles.profileImage} onClick={() => signOut()}></img>
            }
        </div>
    );
}