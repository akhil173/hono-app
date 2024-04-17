import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "notifications",
  default: selector({
    key: "notificationsSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notificationObject = get(notifications);
    return (
      notificationObject.network +
      notificationObject.jobs +
      notificationObject.messaging +
      notificationObject.notifications
    );
  },
});
