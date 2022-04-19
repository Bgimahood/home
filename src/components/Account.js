import { useDispatch } from "react-redux";
import { closeModal } from "../features/MyModal";
const Account = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="modal-container">
                <div className="header blue">Create account with us! <button className="btn" onClick={() => {
                    dispatch(closeModal())
                }}>Close</button></div>
                <div className="content">
                    <form>
                        <input type='text'/>
                        <input type='password'/>
                        <button
                            className="btn blue"
                        > Create
                        </button>
                    </form>
                    
                </div>
            </div>
        </>
    );
}
export default Account;