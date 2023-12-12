import Propsclass from "./Day 4/PropsClass";
import ProspFunctional from "./Day 4/PropsFunction";
import Classcom from "./component/classcom";
import Functionalcom from "./component/functionalcom";
import OneExport from "./component/oneExport";

export default function app(){
  return(
    <div>
      <Functionalcom/>
      <Classcom/>
      <OneExport/>
      <ProspFunctional name="Dhanu"/>
      <Propsclass name="Dhanu"/>
    </div>
  )
}