export default function Page(){
    return(
        <div>
            {/* <title>student page title</title> */}
            <h1>
                Student Page
            </h1>
        </div>
    )
}

export function generateMetadata(){
    return{
        title:"student page title",
        description:"student page description "
    }
}