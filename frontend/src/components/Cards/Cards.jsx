import Colors from "./Colors";
import ApiCall from "./ApiCall";
import Database from "./DataBase/Database";

function Cards() {
  return (
    <div>
      <Colors />
      <ApiCall />
      <Database />
    </div>
  );
}

export default Cards;
