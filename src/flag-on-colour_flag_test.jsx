import { withLDConsumer } from "launchdarkly-react-client-sdk";

const flagPretty = ({ flags }) => {
  return flags.flagColour ? (
    <>
      <span style={{ color: "LimeGreen" }}>ON</span>
    </>
  ) : (
    <>
      <span style={{ color: "Blue" }}>ON</span>
    </>
  );
};

export default withLDConsumer()(flagPretty);
