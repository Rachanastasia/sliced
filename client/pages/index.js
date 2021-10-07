import Screen from "../components/layout";
import Slicer from "../components/Slicer/index";

export default function Home() {
  return (
    <Screen showBanner>
      <Page />
    </Screen>
  );
}

function Page() {
  return (
    <div className="screen_content">
      <Slicer />
    </div>
  );
}
