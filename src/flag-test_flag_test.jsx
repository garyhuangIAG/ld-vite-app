import { withLDConsumer } from "launchdarkly-react-client-sdk";
import FlagOn from "./flag-on-colour_flag_test";
import FlagOff from "./flag-off-colour_flag_test";

// Note flagTest is the flag ID key in camel case
const TestMessage = ({ flags }) => {
  return flags.flagTest ? (
    <>
      <FlagOn />
    </>
  ) : (
    <>
      <FlagOff />
    </>
  );
};

export default withLDConsumer()(TestMessage);
