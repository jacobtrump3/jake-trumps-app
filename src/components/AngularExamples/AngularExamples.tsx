import { useLocation } from 'react-router'
import '../../angular-examples/angular-examples'
export const AngularExamplesComponent = () => {
    const location = useLocation()
    return (
        <div>
            <h3>Angular Examples</h3>
            <angular-examples current-route={location.pathname}></angular-examples>
        </div>
    )
}