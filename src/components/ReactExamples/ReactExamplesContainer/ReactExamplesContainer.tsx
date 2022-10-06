import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { PortalsExample } from '../PortalsExample/PortalsExample';
import { HigherOrderComponents } from '../HigherOrderComponentsExample/HigherOrderComponents';
import { UseStateExample } from '../UseStateExample/UseStateExample';
import { UseEffectExample } from '../UseEffectExample/UseEffectExample';
import { UseContextExample, UseContextExampleForm, UserProvider } from '../UseContextExample/UseContextExample';
import { RefForwardingExample } from '../RefForwardingExample/RefForwardingExample'
export const ReactExamplesContainer = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/react-examples">Home</Link>
          </li>
          <li>
            <Link to="/react-examples/useState">useState Example</Link>
          </li>
          <li>
            <Link to="/react-examples/useEffect">useEffect Example</Link>
          </li>
          <li>
            <Link to="/react-examples/useContext">useContext Example</Link>
          </li>
          <li>
            <Link to="/react-examples/refForwarding">refForwarding Example</Link>
          </li>
          <li>
            <Link to="/react-examples/portals">Portals Example</Link>
          </li>
          <li>
            <Link to="/react-examples/higher-order-comps">Higher Order Components Example</Link>
          </li>
          <li>
            <Link to="/react-examples/angular-examples">Angular Examples</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/react-examples/useState" element={<UseStateExample />}/>
          <Route path="/react-examples/useEffect" element={<UseEffectExample />}/>
          <Route path="/react-examples/useContext" element={
            <UserProvider>
              <UseContextExample/>
              <UseContextExampleForm/>
            </UserProvider>
          }/>
          <Route path="/react-examples/refForwarding" element={<RefForwardingExample />}/>
          <Route path="/react-examples/portals" element={<PortalsExample />}/>
          <Route path="/react-examples/higher-order-comps" element={<HigherOrderComponents />}/>
        </Routes>
        </div>
    )
}