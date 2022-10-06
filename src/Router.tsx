import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AngularExamplesComponent } from './components/AngularExamples/AngularExamples';
import { Content } from "./components/Content/Content";
import { Home } from "./components/Home/Home";
import { ReactExamplesContainer } from "./components/ReactExamples/ReactExamplesContainer/ReactExamplesContainer";
export const Router = (props: any) => {
    return (
      <BrowserRouter>
        {props.children}
        <Content>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/react-examples" element={<ReactExamplesContainer />}/>
            <Route path="/angular-examples" element={<AngularExamplesComponent />}/>
            <Route path="/angular-examples/*" element={<AngularExamplesComponent />}/>
          </Routes>
        </Content>
      </BrowserRouter>
    )
}