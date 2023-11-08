import Topbar from "./components/Topbar/TopBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";
import Find_Job from "./components/find_jobs";
import JobDescription from "./components/job_description";
import { AccountBox } from "./components/accountbox";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import JobPost from "./components/job_post/jobpost";
import Main from "./pages/Main/Main";
import Mainee from "./pagesee/Mainee/Mainee";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/find-job" element={<Find_Job />} />
          <Route path="/job/:jobId" element={<JobDescription />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/about-us" component={AboutUs} /> */}
          {/* <Route path="/faq" component={FAQ} />  */}
          <Route path="/jobpost" element={<JobPost />}></Route>
          <Route path="/candidate" element={<Main />}></Route>
          <Route path="/employer" element={<Mainee />}></Route>
          <Route path="/Post-job" element={<JobPost />}></Route>
          <Route path="/sign-in" element={<AccountBox />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
