/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  [
    {
      path: "/app/dashboard", // the url
      icon: "HomeIcon", // the component being exported from icons/index.js
      name: "Dashboard", // name that appear in Sidebar
    },
    {
      path: "/app/forms",
      icon: "FormsIcon",
      name: "Forms",
    },
    {
      path: "/app/cards",
      icon: "CardsIcon",
      name: "Cards",
    },
    {
      path: "/app/charts",
      icon: "ChartsIcon",
      name: "Charts",
    },
    {
      path: "/app/buttons",
      icon: "ButtonsIcon",
      name: "Buttons",
    },
    {
      path: "/app/modals",
      icon: "ModalsIcon",
      name: "Modals",
    },
    {
      path: "/app/tables",
      icon: "TablesIcon",
      name: "Tables",
    },
    {
      icon: "PagesIcon",
      name: "Pages",
      routes: [
        // submenu
        {
          path: "/login",
          name: "Login",
        },
        {
          path: "/create-account",
          name: "Create account",
        },
        {
          path: "/forgot-password",
          name: "Forgot password",
        },
        {
          path: "/app/404",
          name: "404",
        },
        {
          path: "/app/blank",
          name: "Blank",
        },
      ],
    },
  ],
  [
    {
      path: "/app/dashboard", // the url
      icon: "HomeIcon", // the component being exported from icons/index.js
      name: "Dashboard", // name that appear in Sidebar
    },
    {
      icon: "CartIcon",
      name: "Shop",
      routes: [
        {
          path: "/app/forms",
          name: "Add Purchase",
        },
        {
          path: "/app/forms",
          name: "Issue Refund",
        },
      ],
    },
    {
      icon: "CardsIcon",
      routes: [
        // submenu
        {
          path: "/app/manage-categories",
          name: "Manage Categories",
        },
        {
          path: "/app/manage-suppliers",
          name: "Manage Suppliers",
        },
        {
          path: "/app/add-products",
          name: "Add Products",
        },
        {
          path: "/app/manage-products",
          name: "Manage Products",
        },
      ],
      name: "Products",
    },
    {
      icon: "ChartsIcon",
      name: "Sales",
      routes: [
        // submenu
        {
          path: "/app/sales-list",
          name: "Sales Lists",
        },
        {
          path: "/app/sales-statistics",
          name: "Statistics",
        },
      ],
    },
    {
      path: "/app/tickets",
      icon: "ButtonsIcon",
      name: "Tickets",
    },
    {
      icon: "UserIcon",
      name: "Users",
      routes: [
        // submenu
        {
          path: "/app/add-user",
          name: "Add User",
        },
        {
          path: "/app/manage-users",
          name: "Manage Users",
        },
      ],
    },
    {
      icon: "ParkingIcon",
      name: "Parking Managemnt",
      routes: [
        // submenu
        {
          path: "/app/add-parking",
          name: "Add Parking",
        },
        {
          path: "/app/parked-vehicles",
          name: "Currently Parked",
        },
        {
          path: "/app/pms-settings",
          name: "PMS Settings",
        },
      ],
    },
  ],
];

export default routes;
