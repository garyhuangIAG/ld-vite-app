import { withLDConsumer } from "launchdarkly-react-client-sdk";
import Confetti from "react-confetti";

const confettiFX = ({ flags }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  return (
    <div className="confettie-wrap" ref={confettiRef}>
      <Confetti numberOfPieces={150} width={width} height={height} />
    </div>
  );
};

export default withLDConsumer()(confettiFX);
