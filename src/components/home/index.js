import {Link} from 'react-router-dom'
import './index.css'
import Header from '../header'

const Home = () => (
  <>
    <Header />
    <div className="main-container-home">
      <div className="inner-home-container">
        <h1 className="heading-home">Find The Job That Fits Your Life</h1>
        <p className="paragraph-home">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the jobs that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="jobBtn">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
