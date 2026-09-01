import { useScout } from './useScout.js';
import Toast from './components/Toast.jsx';
import TabBar from './components/TabBar.jsx';
import Onboarding from './screens/Onboarding.jsx';
import Feed from './screens/Feed.jsx';
import MapScreen from './screens/MapScreen.jsx';
import Detail from './screens/Detail.jsx';
import Search from './screens/Search.jsx';
import Saved from './screens/Saved.jsx';
import Planner from './screens/Planner.jsx';
import Profile from './screens/Profile.jsx';
import Framing from './screens/Framing.jsx';
import Conditions from './screens/Conditions.jsx';
import LightDirection from './screens/LightDirection.jsx';
import SaveFromReel from './screens/SaveFromReel.jsx';
import BeforeYouGo from './screens/BeforeYouGo.jsx';
import GoElsewhere from './screens/GoElsewhere.jsx';

const SCREENS = {
  onboarding: Onboarding,
  feed: Feed,
  map: MapScreen,
  detail: Detail,
  search: Search,
  saved: Saved,
  planner: Planner,
  profile: Profile,
  framing: Framing,
  conditions: Conditions,
  lightDirection: LightDirection,
  saveReel: SaveFromReel,
  beforeYouGo: BeforeYouGo,
  goElse: GoElsewhere,
};

export default function App() {
  const scout = useScout();
  const Screen = SCREENS[scout.screen];

  return (
    <div className="app-shell">
      <Screen {...scout} />
      <Toast toast={scout.toast} />
      {scout.showTabs && <TabBar tabs={scout.tabs} screen={scout.screen} go={scout.go} />}
    </div>
  );
}
