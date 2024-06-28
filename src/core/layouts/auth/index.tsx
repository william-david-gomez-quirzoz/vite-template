// import { useStyles } from "./styles"
import { AuthLaoutProps } from "./type"

function AuthLaout({children}: AuthLaoutProps) {
    // const styles = useStyles()
    return (
        <div>
            header
            {children}
        </div>
    )
}

export default AuthLaout