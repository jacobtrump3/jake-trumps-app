import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AngularExamplesComponent } from './components/AngularExamples/AngularExamples';
import { Content } from "./components/Content/Content";
import { Home } from "./components/Home/Home";
import { HigherOrderComponents } from "./components/ReactExamples/HigherOrderComponentsExample/HigherOrderComponents";
import { PortalsExample } from "./components/ReactExamples/PortalsExample/PortalsExample";
import { ReactExamplesAbout } from "./components/ReactExamples/ReactExamplesAbout/ReactExamplesAbout";
import { ReactExamplesContainer } from "./components/ReactExamples/ReactExamplesContainer/ReactExamplesContainer";
import { RefForwardingExample } from "./components/ReactExamples/RefForwardingExample/RefForwardingExample";
import { UseContextExample, UseContextExampleForm, UserProvider } from "./components/ReactExamples/UseContextExample/UseContextExample";
import { UseEffectExample } from "./components/ReactExamples/UseEffectExample/UseEffectExample";
import { UseStateExample } from "./components/ReactExamples/UseStateExample/UseStateExample";
export const Router = (props: any) => {
    return (
      <BrowserRouter>
        {props.children}
        <Content>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/react-examples" element={<ReactExamplesContainer />}>
              <Route path="" element={<Navigate replace to="about"/>}/>
              <Route path="about" element={<ReactExamplesAbout/>}/>
              <Route path="useState" element={<UseStateExample />}/>
              <Route path="useEffect" element={<UseEffectExample />}/>
              <Route path="useContext" element={
                <UserProvider>
                  <UseContextExample/>
                  <UseContextExampleForm/>
                </UserProvider>
              }/>
              <Route path="refForwarding" element={<RefForwardingExample />}/>
              <Route path="portals" element={<PortalsExample />}/>
              <Route path="higher-order-comps" element={<HigherOrderComponents />}/>
            </Route>
            <Route path="/angular-examples" element={<AngularExamplesComponent />}/>
            <Route path="/angular-examples/*" element={<AngularExamplesComponent />}/>
          </Routes>
        </Content>
      </BrowserRouter>
    )
}