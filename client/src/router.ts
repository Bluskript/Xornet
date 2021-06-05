export const routes = [
  // Xornet Home Page
  {
    path: "/:info?",
    name: "home",
    component: () => import("@/views/home/Home.vue"),
    meta: {
      title: "Xornet | Home",
    },
  },
  // Xornet Login
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/home/Login.vue"),
    meta: {
      title: "Xornet | Login",
      guest: true,
    },
  },
  // Xornet Signup
  {
    path: "/forgot",
    name: "forgot",
    component: () => import("@/views/home/Forgot.vue"),
    meta: {
      title: "Xornet | Reset Password",
      guest: true,
    },
  },
  // Xornet Signup
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/home/Signup.vue"),
    meta: {
      title: "Xornet | Signup",
      guest: true,
    },
  },
  // Xornet Dashboard
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      title: "Xornet | Dashboard",
      requiresAuth: true,
    },
    children: [
      {
        path: "summary",
        name: "summary",
        component: () => import("@/views/dashboard/Summary.vue"),
        meta: {
          title: "Xornet | Summary",
        },
      },
      {
        path: "logs",
        name: "logs",
        component: () => import("@/views/dashboard/Logs.vue"),
        meta: {
          title: "Xornet | Logs",
        },
      },
      {
        path: "network",
        name: "network",
        component: () => import("@/views/dashboard/Network.vue"),
        meta: {
          title: "Xornet | Network",
        },
      },
      {
        path: "machines/:machine?",
        name: "machines",
        component: () => import("@/views/dashboard/Machines.vue"),
        meta: {
          title: "Xornet | Machines",
        },
      },
      {
        path: "profile/:username?",
        name: "profile",
        component: () => import("@/views/dashboard/Profile.vue"),
        meta: {
          title: "Xornet | Profile",
        },
      },
    ],
  },
];
