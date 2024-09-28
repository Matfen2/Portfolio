import Collapse from '../Collapse/Collapse';
import '../Capacities/Capacities.scss';
import capacities from '../../data/capacities';

function Capacities() {
  return (
    <div id="capacities-section" className="capacities">
      <h2 className="nameCapacities">MES CAPACITÉS</h2>
      <div className="listCapacities row">
        {capacities.map((capacitie) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={capacitie.id}>
            <Collapse 
              icon={capacitie.icon} 
              capacitie={capacitie.capacitie} 
              details={capacitie.details} 
              listCapacities={capacitie.listCapacities} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Capacities;
