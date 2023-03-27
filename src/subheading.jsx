import { useFlags } from "launchdarkly-react-client-sdk";

export default function () {
  const { subheading } = useFlags();
  return <div>{subheading}</div>;
}
