import Jumbotron from '../Home/Jumbotron';
import Day01 from './Day01/day01';
import Day02 from './Day02/day02';

const Chalenges = () => {
  return (
      <div className="row">
        <div className="col-lg-9">
          <Day02/>
          <Day01/>
        </div>
        <div className="col-lg-3">
          <Jumbotron/>
        </div>
      </div>
     
  );
};

export default Chalenges;
