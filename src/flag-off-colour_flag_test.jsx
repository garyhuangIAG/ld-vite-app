import { withLDConsumer } from "launchdarkly-react-client-sdk";

const flagPretty = ({ flags }) => {
  return flags.flagOffColour ? (
    <>
      <span style={{ color: "Crimson" }}>OFF</span>
    </>
  ) : (
    <>
      <span style={{ color: "LightCoral" }}>OFF</span>
    </>
  );
};

export default withLDConsumer()(flagPretty);
