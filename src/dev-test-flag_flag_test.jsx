import { withLDConsumer } from "launchdarkly-react-client-sdk";
import FlagOn from "./flag-on-colour_flag_test";
import FlagOff from "./flag-off-colour_flag_test";

const TestMessage = ({ flags }) => {
  return flags.devTestFlag ? (
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
