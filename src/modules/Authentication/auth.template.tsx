const AuthTemplate = ({children}: any) => {
    return (
        <div className="h-screen  items-center justify-center flex ">
            <div className="text-center shadow-2xl w-1/3 rounded-md">{children}</div> 
        </div>
    )
}

export default AuthTemplate;