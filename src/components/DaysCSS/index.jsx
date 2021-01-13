import Jumbotron from '../Home/Jumbotron';
import Day01 from './Day01/day01'

const Chalenges = () => {
  return (
      <div className="row">
        <div className="col-lg-9">
          <Day01/>
        </div>
        <div className="col-lg-3">
          <Jumbotron/>
        </div>
      </div>
     
  );
};

export default Chalenges;
