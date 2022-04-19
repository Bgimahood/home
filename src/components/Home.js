import { useSelector } from 'react-redux';
function Home() {
    const user = useSelector((state)=>state.user.value)
    return (
        <>
            <h2>Welcome to Home </h2> 
            <hr />
            <p>Name: {user.name} </p>
            <p>Email: {user.email}</p>
            <p>Contact: {user.contact}</p>
        </>
    );
}
export default Home;