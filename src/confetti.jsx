import ConfettiExplosion from "react-confetti-explosion";

export default function () {
  return (
    <>
      <ConfettiExplosion
        duration="2500"
        particleCount="500"
        colors={[
          "#F08080",
          "#FA8072",
          "#CCF1FF",
          "#E0D7FF",
          "#FAFFC7",
          "#FEC8D8",
          "#EFF9DE",
          "#DBF1E6",
          "#FFFFFF",
          "#9AE49E",
          "#76CBF0",
          "#FFCADD",
          "#FFFF00",
          "#0000FF",
          "#FF00FF",
          "#00FF00",
          "#FF0000",
        ]}
      />
    </>
  );
}
