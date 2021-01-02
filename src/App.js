import "fontsource-roboto";
import { Button, Icon } from "@material-ui/core";

import PhotoGrid from "./components/PhotoGrid";
function App() {
  return (
    <div className="App">
      <Button variant="contained" color="secondary">
        This is our first button
      </Button>
      <PhotoGrid />
    </div>
  );
}

export default App;
