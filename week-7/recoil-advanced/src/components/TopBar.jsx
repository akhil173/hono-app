import { useRecoilState, useRecoilValue } from "recoil";
import {
  notifications,
  totalNotificationSelector,
} from "../store/atoms/notifications";

export function TopBar() {
  const notificationValues = useRecoilValue(notifications);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>

      <button>
        My network (
        {notificationValues.network >= 100 ? "99+" : notificationValues.network}
        )
      </button>
      <button>Jobs {notificationValues.jobs}</button>
      <button>Messaging ({notificationValues.messaging})</button>
      <button>Notifications ({notificationValues.notifications})</button>

      <button>Me ({totalNotifications})</button>
    </div>
  );
}
