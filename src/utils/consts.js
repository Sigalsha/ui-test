export const COMPANY_NAME = "Merkury";

export const NAV_LINKS = [
  "home, workflow, statistics, calendar, users, settings",
];

export const BUTTONS_TEXT = { headerBtn: "Add project" };

export const CHART_HEADERS = ["Your Sales", "Report"];

export const CONTENT_HEADERS = ["Tasks", "Messages", "Activity"];

export const getTimestamps = (num, time) => {
  switch (time) {
    case "delay":
      return `${num} days delay`;
    case "days":
      return `${num} days left`;
    case "hours":
      return `${num} hours ago`;
    case "hour":
      return `${num} hour ago`;
    case "minutes":
      return `${num} minutes ago`;
    case "weeks":
      return `${num} weeks ago`;
    case "now":
      return "Just now";
    default:
      return "Just now";
  }
};

export const TASKS_INFO = [
  {
    title: "New website for Symu.co",
    timestamp: getTimestamps(5, "delay"),
    isDelay: true,
    isAvatar: false,
  },
  {
    title: "Free business PSD Template",
    timestamp: getTimestamps(2, "delay"),
    isDelay: true,
    isAvatar: false,
  },
  {
    title: "New logo for JCD.pl",
    timestamp: getTimestamps(5, "days"),
    isAvatar: false,
  },
  {
    title: "Free icons Set vol. 3",
    timestamp: getTimestamps(10, "days"),
    isAvatar: false,
  },
];

export const getActivities = (activity) => {
  switch (activity) {
    case "newProject":
      return "added a new project";
    case "commentProject":
      return "commented project";
    case "task":
      return "completed task";
    default:
      return "added a new project";
  }
};

export const ACTIVITIES_INFO = [
  {
    name: "Nina Jones",
    activityType: getActivities("newProject"),
    activityName: "Free UI Kit",
    isAvatar: true,
    timestamp: getTimestamps("now"),
  },
  {
    name: "James Smith",
    activityType: getActivities("commentProject"),
    activityName: "Free PSD Template",
    isAvatar: true,
    timestamp: getTimestamps(40, "minutes"),
  },
  {
    name: "Alex Clooney",
    activityType: getActivities("task"),
    activityName: "Symu Website",
    isAvatar: true,
    timestamp: getTimestamps(1, "hour"),
  },
  {
    name: "Alexandra Spears",
    activityType: getActivities("newProject"),
    activityName: "Free PSD(...)",
    isAvatar: true,
    timestamp: getTimestamps(3, "hours"),
  },
];

export const MESSAGES_INFO = [
  {
    name: "Nina Jones",
    timestamp: getTimestamps(5, "minutes"),
    message: `Hey You! It's me again :) I attached new(...)`,
    isAvatar: true,
  },
  {
    name: "Nina Jones",
    timestamp: `About ${getTimestamps(20, "hours")}`,
    message: "Hey! I attached new PSD files for(...)",
    isAvatar: true,
  },
  {
    name: "James Smith",
    timestamp: getTimestamps(2, "days"),
    message: "Good morning, you are fired!",
    isAvatar: true,
  },
  {
    name: "Nina Jones",
    timestamp: `About ${getTimestamps(2, "weeks")}`,
    message: "Hello! Could You bring me coffee please?",
    isAvatar: true,
  },
];

// export const CONTENT_NUMBERS = [{ type: 'Tasks', timeout: 5, delay: 2 }, { type: 'Messages', timeout: 2 }]

export const getTitle = (name) => `Hello ${name}!`;
