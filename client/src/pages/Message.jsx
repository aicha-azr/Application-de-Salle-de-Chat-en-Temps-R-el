const Message = ({username, text})=>{
    return(
        <>
            <div>
                <p>{username}</p>
                <p>{text}</p>
            </div>
        </>
    )
}
export default Message;