import "./styles.css";
import { useCallback, useState } from "react";

export default function App() {
  const [isImageChanged, setIsImageChanged] = useToggle();

  return (
    <div onClick={setIsImageChanged} className="image">
      {isImageChanged ? (
        <img src="https://www.pngitem.com/pimgs/m/449-4491589_baymax-armor-wings-render-big-hero-6-baymax.png" />
      ) : (
        <img src="https://www.pngitem.com/pimgs/m/279-2798708_transparent-baymax-wall-e-and-baymax-hd-png.png" />
      )}
    </div>
  );
}
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};