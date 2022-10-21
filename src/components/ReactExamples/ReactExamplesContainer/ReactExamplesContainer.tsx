import {
  Outlet,
  NavLink
} from "react-router-dom";
import ReactIcon from "../../../icons/ReactIcon";

export const ReactExamplesContainer = () => {
    const showActive = ({isActive}: {isActive: boolean}) => isActive ? 'text-black' : 'text-muted'
    return (
      <div className="w-100">
        <h2 className='d-flex justify-content-center pt-4 pb-3 border-top border-info mt-0'>
          <ReactIcon height={28} width={28} style={{marginTop: "2px", marginRight: "8px"}}/> 
          React Notes
        </h2>
        <div className="container-fluid d-flex flex-column overflow-hidden" style={{height: 'calc(100vh - 148px)'}}>
          <div className="row overflow-hidden h-100 ps-4 border-top border-info">
            <div className="border-end border-info pt-5" style={{width: '224px'}}>
              <ul>
                <li>
                  <NavLink to="/react-examples/about" className={showActive} >About</NavLink>
                </li>
                <li>
                  <NavLink to="/react-examples/useState" className={showActive}>useState Example</NavLink>
                </li>
                <li>
                  <NavLink to="/react-examples/useEffect" className={showActive}>useEffect Example</NavLink>
                </li>
                <li>
                  <NavLink to="/react-examples/useContext" className={showActive}>useContext Example</NavLink>
                </li>
                <li>
                  <NavLink to="/react-examples/refForwarding" className={showActive}>refForwarding Example</NavLink>
                </li>
                <li>
                  <NavLink to="/react-examples/portals" className={showActive}>Portals Example</NavLink>
                </li>
                <li>
                  <NavLink to="/react-examples/higher-order-comps" className={showActive}>Higher Order Components Example</NavLink>
                </li>
              </ul>
            </div>
            <div 
              className="col mh-100 overflow-auto ms-5 ps-5 pe-4 d-flex flex-column pt-5"
              style={{bottom: 0}}
            >
              <Outlet />     
            </div>
          </div>
        </div>
      </div>
    )
}